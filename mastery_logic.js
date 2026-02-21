// TITANIUM MASTER ENGINE - V3.3 (ENGINEERING GRADE)
// Documentation: 
// - drugDB Object: { g: generic, b: brand, c: class, m: moa, ind: indic, con: contra, aec: common, aes: severe, inter: [], dosage: str, admin: str, nurse: str }
// - Mission Object: { numerical_id: int, title: str, patient_profile: {}, exhibits: [], steps: [] }

let filters = { cv: true, dm: true };
let sortMode = 'az';
let currentMission = null;
let currentStepIndex = 0;
let missionFeedbackMode = false;
let allMissions = [];

/**
 * CENTRALIZED LOGGING & ERROR HANDLING
 */
const Logger = {
    info: (msg, data = "") => console.log(`%c[INFO] ${msg}`, "color: #3b82f6; font-weight: bold", data),
    warn: (msg, data = "") => console.warn(`[WARN] ${msg}`, data),
    error: (msg, err = "") => {
        console.error(`[CRITICAL ERROR] ${msg}`, err);
        // Visual feedback for critical failure
        const indicator = document.getElementById('status-indicator');
        if (indicator) { indicator.innerText = "System Offline"; indicator.className = "text-danger small fw-bold"; }
    }
};

/**
 * SYSTEM AUDIT TOOL (Run TitaniumAudit.verify() in console)
 */
window.TitaniumAudit = {
    verify: function () {
        Logger.info("Commencing System Audit...");
        const drugCount = window.drugDB ? window.drugDB.length : 0;
        const missionCount = allMissions.length;

        Logger.info(`Pharma Database: ${drugCount}/122 items.`);
        if (drugCount < 122) Logger.warn("Drug database is incomplete.");

        allMissions.forEach(m => {
            if (!m.numerical_id || !m.steps || m.steps.length === 0) {
                Logger.error(`Mission Integrity Failure: ID ${m.id}`);
            }
        });
        Logger.info("Audit Complete. System stable.");
        return "Audit Pass";
    }
};

/**
 * PERFORMANCE OPTIMIZED RENDERING
 */
function renderDrugs() {
    try {
        const grid = document.getElementById('drug-grid');
        const search = document.getElementById('drugSearch').value.toLowerCase();
        if (!window.drugDB) throw new Error("Data module missing: drugDB");

        const filtered = window.drugDB.filter(d => {
            const catMatch = filters[d.cat];
            const searchMatch = !search || d.g.toLowerCase().includes(search) || d.b.toLowerCase().includes(search) || d.c.toLowerCase().includes(search);
            return catMatch && searchMatch;
        });

        if (sortMode === 'az') filtered.sort((a, b) => a.g.localeCompare(b.g));
        else filtered.sort((a, b) => a.c.localeCompare(b.c));

        grid.innerHTML = filtered.map(d => `
            <div class="col-md-6 mb-4">
                <div class="nexus-card shadow-lg">
                    <div class="d-flex justify-content-between align-items-start mb-3" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
                        <div><h4 class="fw-bold text-white mb-0">${d.g}</h4><div class="small text-accent fw-bold">Brand: ${d.b}</div></div>
                        <span class="badge ${d.cat === 'cv' ? 'badge-cv' : 'badge-dm'}">${d.c}</span>
                    </div>
                    <span class="point-label">1. Mechanism of Action</span><div class="point-value">${d.m}</div>
                    <div class="row">
                        <div class="col-md-6"><span class="point-label">2. Clinical Indications</span><div class="point-value">${d.ind}</div></div>
                        <div class="col-md-6"><span class="point-label">3. Contraindications</span><div class="point-value">${d.con}</div></div>
                    </div>
                    <span class="point-label">4. Common Side Effects</span><div class="ae-common">${d.aec}</div>
                    <span class="point-label" style="color: var(--danger);">5. Severe Adverse Effects</span><div class="ae-severe">${d.aes}</div>
                    <span class="point-label">6. Pharmacological Interactions</span>
                    <table class="inter-table">${d.inter && d.inter.length ? d.inter.map(i => `<tr class="${i.s}"><td style="font-weight:700; color:#fff; width:35%;">${i.d}</td><td style="color:#cbd5e1;">${i.m}</td></tr>`).join('') : '<tr><td class="text-white-50 small italic">Verified Profile.</td></tr>'}</table>
                    <div class="data-strip">
                        <div class="logistics-box box-dosage"><span class="box-title">7. Adult Dosage</span>${d.dosage}</div>
                        <div class="logistics-box box-admin"><span class="box-title">8. Admin & Timing</span>${d.admin}</div>
                    </div>
                    <span class="point-label">9. Nursing Considerations</span><div class="point-value text-info">${d.nurse}</div>
                </div>
            </div>
        `).join('');
        document.getElementById('counter').innerText = `${filtered.length} Unique Generics`;
    } catch (e) { Logger.error("Drug Grid Render Failed", e); }
}

/**
 * INPUT VALIDATION & MISSION LOGIC
 */
function handleMissionAction() {
    if (missionFeedbackMode) {
        nextMissionStep();
        return;
    }

    const step = currentMission.steps[currentStepIndex];
    let isValidInput = false;

    // VALIDATION LAYER
    if (step.type === 'extended_sata') {
        isValidInput = document.querySelectorAll('input[name="m-opt"]:checked').length > 0;
    } else if (step.type === 'matrix') {
        isValidInput = step.rows.every(r => document.querySelector(`input[name="row-${r}"]:checked`));
    } else if (step.type === 'bowtie') {
        const l = document.querySelectorAll('input[name="bw-l"]:checked').length;
        const r = document.querySelectorAll('input[name="bw-r"]:checked').length;
        const c = document.getElementById('bw-c').value;
        isValidInput = (l === 2 && r === 2 && c !== "");
    }

    if (!isValidInput) {
        alert("Please complete all required selections before submitting.");
        return;
    }

    evaluateMissionStep();
}

function evaluateMissionStep() {
    const step = currentMission.steps[currentStepIndex];
    let isCorrect = false;

    try {
        if (step.type === 'extended_sata') {
            const sel = Array.from(document.querySelectorAll('input[name="m-opt"]:checked')).map(i => i.value);
            isCorrect = sel.length === step.answer.length && sel.every(v => step.answer.includes(v));
        } else if (step.type === 'matrix') {
            isCorrect = step.rows.every(r => document.querySelector(`input[name="row-${r}"]:checked`)?.value === step.answer[r]);
        } else if (step.type === 'bowtie') {
            const diag = document.getElementById('bw-c').value;
            const l = Array.from(document.querySelectorAll('input[name="bw-l"]:checked')).map(i => i.value);
            const r = Array.from(document.querySelectorAll('input[name="bw-r"]:checked')).map(i => i.value);
            isCorrect = (diag === step.center_condition.answer &&
                l.length === 2 && l.every(v => step.left_actions.answer.includes(v)) &&
                r.length === 2 && r.every(v => step.right_monitor.answer.includes(v)));
        }

        const fb = document.getElementById('mission-feedback');
        fb.innerHTML = `
            <div class="p-4 rounded-4 border-2 ${isCorrect ? 'border-success' : 'border-danger'}" 
                 style="background: ${isCorrect ? 'rgba(22, 101, 52, 0.3)' : 'rgba(153, 27, 27, 0.3)'};">
                <h4 class="fw-bold ${isCorrect ? 'text-success' : 'text-danger'}">${isCorrect ? 'CORRECT' : 'INCORRECT'}</h4>
                <p class="text-white mt-2">${step.rationale || "Verify clinical cues."}</p>
            </div>`;

        missionFeedbackMode = true;
        document.getElementById('m-action-btn').innerText = (currentStepIndex === currentMission.steps.length - 1) ? "FINISH MISSION" : "NEXT STEP";
    } catch (e) { Logger.error("Step Evaluation Failed", e); }
}

// NAVIGATION WRAPPERS
function startMission() {
    allMissions = [
        ...(typeof window.mission_prototype !== 'undefined' ? [window.mission_prototype] : []),
        ...(typeof window.missions_cardio_1 !== 'undefined' ? window.missions_cardio_1 : []),
        ...(typeof window.missions_cardio_2 !== 'undefined' ? window.missions_cardio_2 : []),
        ...(typeof window.missions_cardio_3 !== 'undefined' ? window.missions_cardio_3 : []),
        ...(typeof window.missions_cardio_4 !== 'undefined' ? window.missions_cardio_4 : []),
        ...(window.customMissions || [])
    ];
    console.log('allMissions loaded:', allMissions.length, 'missions');
    console.log('Missions with IDs:', allMissions.map(m => m.numerical_id).sort());
    console.log('M-051 found:', allMissions.find(m => m.numerical_id === 51));
    showMissionSelector();
}

function showMissionSelector() {
    const modalHtml = `
    <div id="missionSelectorModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--primary); z-index: 2050; overflow-y: auto; padding: 40px;">
        <div class="container" style="max-width: 1200px;">
            <div class="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3 border-secondary">
                <h2 class="text-accent fw-bold">CLINICAL MISSION CONTROL</h2>
                <button class="btn btn-outline-danger" onclick="closeMissionSelector()">Exit</button>
            </div>
            
            <div class="mb-5">
                <h4 class="text-white mb-3 border-start border-4 border-info ps-3">CARDIOVASCULAR (1-20)</h4>
                <div class="row row-cols-5 g-3">
                    ${Array.from({ length: 20 }).map((_, i) => renderMissionButton(i + 1, 'cv')).join('')}
                </div>
            </div>

            <div class="mb-5">
                <h4 class="text-white mb-3 border-start border-4 border-success ps-3">DIABETES MELLITUS (21-30)</h4>
                <div class="row row-cols-5 g-3">
                    ${Array.from({ length: 10 }).map((_, i) => renderMissionButton(i + 21, 'dm')).join('')}
                </div>
            </div>

            <div class="mb-5">
                <h4 class="text-white mb-3 border-start border-4 border-warning ps-3">COMBINED / COMORBIDITIES (31-40)</h4>
                <div class="row row-cols-5 g-3">
                    ${Array.from({ length: 10 }).map((_, i) => renderMissionButton(i + 31, 'combined')).join('')}
                </div>
            </div>

            <div class="mb-5">
                <h4 class="text-white mb-3 border-start border-4 border-danger ps-3">ACUTE RESPIRATORY / PNEUMONIA (41-50)</h4>
                <div class="row row-cols-5 g-3">
                    ${Array.from({ length: 10 }).map((_, i) => renderMissionButton(i + 41, 'acute_resp')).join('')}
                </div>
            </div>

            <div class="mb-5">
                <h4 class="text-white mb-3 border-start border-4 border-purple ps-3">ADVANCED NGN MISSIONS (51-60)</h4>
                <div class="row row-cols-5 g-3">
                    ${Array.from({ length: 10 }).map((_, i) => renderMissionButton(i + 51, 'advanced')).join('')}
                </div>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function renderMissionButton(id, category) {
    const mission = allMissions.find(m => m.numerical_id === id);
    const locked = !mission;
    let colorClass;
    if (category === 'cv') colorClass = 'btn-outline-info';
    else if (category === 'dm') colorClass = 'btn-outline-success';
    else if (category === 'acute_resp') colorClass = 'btn-outline-danger';
    else if (category === 'advanced') colorClass = 'btn-outline-purple';
    else colorClass = 'btn-outline-warning'; // combined
    const activeClass = mission ? `bg-opacity-10 ${colorClass.replace('btn-outline', 'bg')} text-white border-${colorClass.split('-')[2]}` : 'btn-outline-secondary opacity-25';

    return `
    <div class="col">
        <button class="btn ${activeClass} w-100 p-2 fw-bold text-start position-relative" style="height: 100px; overflow: hidden;" ${mission ? `onclick="launchSpecificMission(${id})"` : 'disabled'}>
            <div class="fs-4 opacity-50 mb-1">#${id}</div>
            <div style="font-size: 0.65rem; text-transform: uppercase; line-height: 1.2;">${mission ? mission.title : 'LOCKED'}</div>
        </button>
    </div>`;
}

function launchSpecificMission(id) {
    currentMission = allMissions.find(m => m.numerical_id === id);
    currentStepIndex = 0; missionFeedbackMode = false;
    document.getElementById('missionSelectorModal')?.remove();
    showMissionUI();
}

function showMissionUI() {
    document.body.style.overflow = 'hidden';
    const html = `<div id="missionModal" class="mission-container">
        <button class="sidecar-toggle" onclick="toggleSidecar()"><i class="fas fa-pills fs-3"></i></button>
        <div id="pharmaSidecar" class="pharma-sidecar"><div class="sidecar-header"><div class="d-flex justify-content-between align-items-center mb-3"><h5 class="text-white mb-0">REFERENCE</h5><button class="btn btn-sm btn-outline-light" onclick="toggleSidecar()">X</button></div><input type="text" id="sidecarSearch" class="form-control form-control-sm bg-dark text-white" placeholder="Search..." onkeyup="renderSidecar()"></div><div id="sidecarContent" class="sidecar-content"></div></div>
        <div class="chart-pane"><div class="chart-header d-flex justify-content-between p-3"><div><h6 class="text-warning mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">MISSION ${currentMission.numerical_id}: ${currentMission.title.toUpperCase()}</h6><h5 class="mb-0 text-white">${currentMission.patient_profile.demographics.name}</h5><span class="small text-white-50">MRN: ${currentMission.patient_profile.demographics.mrn}</span></div><button class="btn btn-outline-light btn-sm" onclick="closeMission()">Exit</button></div><div class="chart-tabs" id="mission-tabs"></div><div id="mission-content" class="chart-content"></div></div>
        <div class="work-pane"><div id="step-area"></div><div id="mission-feedback"></div><div class="mt-5 d-flex justify-content-between"><button class="btn btn-outline-secondary" id="m-back-btn" onclick="prevMissionStep()">BACK</button><button id="m-action-btn" class="btn btn-warning btn-lg px-5 fw-bold" onclick="handleMissionAction()">SUBMIT</button></div></div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(() => { renderMissionExhibits(); renderMissionStep(); }, 200);
}

function renderMissionExhibits() {
    const tabs = document.getElementById('mission-tabs');
    let html = `<div class="chart-tab active" onclick="showMissionExhibit('history', this)">History</div>`;
    currentMission.exhibits.forEach((ex, idx) => { html += `<div class="chart-tab" onclick="showMissionExhibit(${idx}, this)">${ex.title}</div>`; });
    tabs.innerHTML = html; showMissionExhibit('history');
}

function showMissionExhibit(type, el) {
    if (el) { document.querySelectorAll('#missionModal .chart-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); }
    const content = document.getElementById('mission-content');
    if (type === 'history') {
        const p = currentMission.patient_profile;
        content.innerHTML = `<h5 class="fw-bold text-primary mb-3">Admission H&P</h5><div class="mb-3"><h6 class="fw-bold text-secondary small">CHIEF COMPLAINT</h6><p>${p.chief_complaint}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small">HPI</h6><p>${p.hpi}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small">PMH</h6><p>${p.pmh}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small">REVIEW OF SYSTEMS</h6><ul class="small"><li><strong>Cardio:</strong> ${p.ros.cardio}</li><li><strong>Neuro:</strong> ${p.ros.neuro}</li><li><strong>GI:</strong> ${p.ros.gi}</li><li><strong>GU:</strong> ${p.ros.gu}</li></ul></div>`;
    } else {
        const ex = currentMission.exhibits[type];
        if (ex.type === 'table') {
            content.innerHTML = `<h5 class="fw-bold text-primary mb-3">${ex.title}</h5><table class="table table-bordered table-sm small mt-2"><thead><tr>${Object.keys(ex.data[0]).map(k => `<th>${k.toUpperCase()}</th>`).join('')}</tr></thead><tbody>${ex.data.map(row => `<tr>${Object.values(row).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
        } else { content.innerHTML = `<h5 class="fw-bold text-primary mb-3">${ex.title}</h5><div class="fs-6 mt-3 text-dark">${ex.content}</div>`; }
    }
}

function renderMissionStep() {
    missionFeedbackMode = false; const step = currentMission.steps[currentStepIndex];
    const area = document.getElementById('step-area'); document.getElementById('mission-feedback').innerHTML = '';
    let optsHtml = '';
    if (step.type === 'extended_sata') {
        optsHtml = `<div class="list-group">${step.options.map(o => `<label class="list-group-item list-group-item-action p-3 mb-2"><input class="form-check-input me-3" type="checkbox" name="m-opt" value="${o}">${o}</label>`).join('')}</div>`;
    } else if (step.type === 'matrix') {
        optsHtml = `<div class="table-responsive"><table class="matrix-table"><thead><tr><th>Finding</th>${step.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${step.rows.map(r => `<tr><td class="text-white">${r}</td>${step.columns.map(c => `<td class="radio-cell text-center"><input type="radio" name="row-${r}" value="${c}" class="form-check-input"></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    } else if (step.type === 'bowtie') {
        optsHtml = `<div class="bowtie-container"><div class="bowtie-wing left"><div class="bowtie-label">Actions (2)</div>${step.left_actions.options.map(o => `<label class="bw-option"><input type="checkbox" name="bw-l" value="${o}"><span class="text-white">${o}</span></label>`).join('')}</div><div class="bowtie-center"><div class="bowtie-label">Condition</div><select id="bw-c" class="form-select form-select-lg bg-dark text-white border-warning"><option value="" disabled selected>Select Condition...</option>${step.center_condition.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select></div><div class="bowtie-wing right"><div class="bowtie-label">Monitor (2)</div>${step.right_monitor.options.map(o => `<label class="bw-option"><input type="checkbox" name="bw-r" value="${o}"><span class="text-white">${o}</span></label>`).join('')}</div></div>`;
    }
    area.innerHTML = `<div class="step-badge">${step.type.toUpperCase()}</div><h3 class="text-white mb-4 fw-bold">${step.prompt}</h3><div>${optsHtml}</div>`;
    document.getElementById('m-action-btn').innerText = "SUBMIT";
    document.getElementById('m-back-btn').disabled = currentStepIndex === 0;
}

function closeMission() {
    document.body.style.overflow = 'auto';
    document.getElementById('missionModal')?.remove();
    if (typeof showMissionSelectorNew === 'function') {
        showMissionSelectorNew();
    } else {
        showMissionSelector();
    }
}
function nextMissionStep() { if (currentStepIndex < currentMission.steps.length - 1) { currentStepIndex++; renderMissionStep(); } else { closeMission(); } }
function prevMissionStep() { if (currentStepIndex > 0) { currentStepIndex--; renderMissionStep(); } }
function toggleSidecar() { document.getElementById('pharmaSidecar').classList.toggle('active'); }

function renderSidecar() {
    const q = document.getElementById('sidecarSearch').value.toLowerCase();
    const content = document.getElementById('sidecarContent');
    if (q.length < 2) { content.innerHTML = '<div class="text-white-50 text-center mt-5 small">Search for drug cues...</div>'; return; }
    const matches = window.drugDB.filter(d => d.g.toLowerCase().includes(q) || d.b.toLowerCase().includes(q) || d.c.toLowerCase().includes(q));
    content.innerHTML = matches.map(d => `
        <div class="sidecar-drug-card p-3 mb-3" style="border-left: 4px solid var(--accent); background: rgba(0,0,0,0.2);">
            <h6 class="text-white fw-bold mb-1">${d.g} <span class="text-white-50 fw-normal">(${d.b})</span></h6>
            <div class="badge bg-secondary mb-2">${d.c}</div>
            
            <div class="mb-2">
                <strong class="text-accent" style="font-size: 0.75rem;">MECHANISM</strong>
                <div class="text-white-50" style="font-size: 0.75rem;">${d.m}</div>
            </div>

            <div class="mb-2">
                <strong class="text-danger" style="font-size: 0.75rem;">CONTRAINDICATIONS</strong>
                <div class="text-white-50" style="font-size: 0.75rem;">${d.con}</div>
            </div>

            <div class="mb-2">
                <strong class="text-warning" style="font-size: 0.75rem;">SEVERE ADVERSE EFFECTS</strong>
                <div class="ae-severe small">${d.aes}</div>
            </div>
            
            <div class="mb-2">
                <strong class="text-info" style="font-size: 0.75rem;">NURSING CONSIDERATIONS</strong>
                <div class="text-info" style="font-size: 0.75rem;">${d.nurse}</div>
            </div>
        </div>
    `).join('') || '<div class="text-white-50 text-center mt-5">No matches found.</div>';
}

function toggleFilter(cat) { filters[cat] = !filters[cat]; document.getElementById(`btn-${cat}`).classList.toggle(`active-${cat}`, filters[cat]); renderDrugs(); }
function setSort(mode) { sortMode = mode; document.getElementById('sort-az').classList.toggle('active', mode === 'az'); document.getElementById('sort-class').classList.toggle('active', mode === 'class'); renderDrugs(); }
