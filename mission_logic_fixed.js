// MASTER HUB REFACTORED MISSIONS LOGIC
// currentMission, currentStepIndex, missionFeedbackMode, and allMissions are declared in mastery_logic.js
let missionsUnlocked = false;

function startMission() {
    allMissions = [
        ...(typeof mission_prototype !== 'undefined' ? [mission_prototype] : []),
        ...(typeof missions_cardio_1 !== 'undefined' ? missions_cardio_1 : []),
        ...(typeof missions_cardio_2 !== 'undefined' ? missions_cardio_2 : []),
        ...(typeof missions_dm_1 !== 'undefined' ? missions_dm_1 : []),
        ...(window.customMissions || []) // Include dynamically loaded missions
    ];
    showMissionSelectorNew();
}

function unlockAllMissions() {
    missionsUnlocked = true;
    showMissionSelectorNew();
}

function showMissionSelectorNew() {
    // Hide home screen content when showing mission selector
    const homeContent = document.querySelector('.container-fluid.px-4.mt-4');
    if (homeContent) {
        homeContent.style.display = 'none';
    }
    document.getElementById('missionSelectorModal')?.remove();

    // Group missions by main category (before the " / ")
    const missionGroups = {};
    allMissions.forEach(mission => {
        const fullCategory = mission.category || 'Other';
        const mainCategory = fullCategory.split(' / ')[0] || fullCategory;
        if (!missionGroups[mainCategory]) {
            missionGroups[mainCategory] = [];
        }
        missionGroups[mainCategory].push(mission);
    });

    // Create HTML for each category
    let categoryHtml = '';
    const colors = ['border-info', 'border-success', 'border-warning', 'border-danger', 'border-primary'];
    let colorIndex = 0;

    Object.keys(missionGroups).forEach(category => {
        const missions = missionGroups[category];
        const color = colors[colorIndex % colors.length];
        colorIndex++;

        categoryHtml += `
            <div class="col-md-6 mb-4">
                <h4 class="text-white border-start ${color} border-4 ps-3 mb-4">${category.toUpperCase()} (${missions.length})</h4>
                <div class="row g-3">
                    ${missions.map(mission => renderMissionButton(mission.numerical_id, category.toLowerCase().replace(/\s+/g, ''))).join('')}
                </div>
            </div>
        `;
    });

    const modalHtml = `
        <div id="missionSelectorModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--primary); z-index: 2050; overflow-y: auto; padding: 40px;">
            <div class="container" style="max-width: 1100px;">
                <div class="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3 border-secondary">
                    <h2 class="text-accent fw-bold">
                        <i class="fas fa-map-marked-alt me-3"></i>
                        <span onclick="unlockAllMissions()" style="cursor: default;">C</span>LINICAL MISSION CONTROL
                    </h2>
                    <button class="btn btn-outline-danger" onclick="closeMissionSelector()">Return to Hub</button>
                </div>
                <div class="row">
                    ${categoryHtml}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function renderMissionButton(id, category) {
    const mission = allMissions.find(m => m.numerical_id === id);
    const isAvailable = !!mission || missionsUnlocked;
    const color = category === 'cv' ? 'btn-outline-info' : 'btn-outline-success';
    const activeColor = category === 'cv' ? 'bg-info text-primary' : 'bg-success text-white';
    
    let title = 'LOCKED';
    if (mission) title = mission.title;
    else if (missionsUnlocked) title = 'DATA PENDING';

    return `
        <div class="col-3">
            <button class="btn ${isAvailable ? activeColor : color} w-100 p-1 fw-bold shadow-sm ${!isAvailable ? 'opacity-25' : ''}" 
                    style="height: 80px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-width: 2px; overflow: hidden;" 
                    ${isAvailable ? `onclick="launchSpecificMission(${id})"` : 'disabled'}>
                <div class="fs-6" style="line-height: 1;">${id}</div>
                <div style="font-size: 0.5rem; line-height: 1; text-transform: uppercase; margin-top: 3px; white-space: normal; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; padding: 0 2px;">
                    ${title}
                </div>
            </button>
        </div>
    `;
}

function closeMissionSelector() {
    document.getElementById('missionSelectorModal')?.remove();
    // Show home screen content again
    const homeContent = document.querySelector('.container-fluid.px-4.mt-4');
    if (homeContent) {
        homeContent.style.display = 'block';
    }
    // Navigate back to home screen
    if (typeof showHomeScreen === 'function') {
        showHomeScreen();
    }
}

function launchSpecificMission(id) {
    const mission = allMissions.find(m => m.numerical_id === id);
    if (!mission) {
        alert("Mission data pending for slot: " + id);
        return;
    }
    currentMission = mission;
    currentStepIndex = 0;
    missionFeedbackMode = false;
    closeMissionSelector();
    showMissionUI();
}

function showMissionUI() {
    document.body.style.overflow = 'hidden';
    const html = `<div id="missionModal" class="mission-container"><div class="chart-pane"><div class="chart-header d-flex justify-content-between align-items-center"><div><h5 class="mb-0 fw-bold" style="color:white !important;">${currentMission.patient_profile.demographics.name}</h5><span class="small opacity-75" style="color:white !important;">MRN: ${currentMission.patient_profile.demographics.mrn} | AGE: ${currentMission.patient_profile.demographics.age}</span></div><button class="btn btn-outline-light btn-sm" onclick="closeMission()">Exit Mission</button></div><div class="chart-tabs" id="mission-tabs"></div><div id="mission-content" class="chart-content"></div></div><div class="work-pane"><div id="step-area"></div><div id="mission-feedback" class="mt-4"></div><div class="mt-5 border-top border-secondary pt-4 d-flex justify-content-between align-items-center"><button id="mission-prev-btn" class="btn btn-outline-secondary btn-lg px-4" onclick="prevMissionStep()">BACK</button><div id="step-counter" class="text-white-50 fw-bold">STEP 1 OF 3</div><button id="mission-action-btn" class="btn btn-warning btn-lg px-5 fw-bold shadow" onclick="handleMissionAction()">SUBMIT ANSWER</button></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(() => {
        renderMissionExhibits();
        renderMissionStep();
    }, 100);
}

function closeMission() { document.body.style.overflow = 'auto'; document.getElementById('missionModal')?.remove(); }

function renderMissionExhibits() {
    const tabs = document.getElementById('mission-tabs');
    if (!tabs) return;
    let html = `<div class="chart-tab active" onclick="showMissionExhibit('history', this)">History</div>`;
    currentMission.exhibits.forEach((ex, idx) => {
        html += `<div class="chart-tab" onclick="showMissionExhibit(${idx}, this)">${ex.title}</div>`;
    });
    tabs.innerHTML = html;
    showMissionExhibit('history');
}

function showMissionExhibit(type, el) {
    if (el) { document.querySelectorAll('#missionModal .chart-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); }
    const content = document.getElementById('mission-content');
    if (!content) return;
    if (type === 'history') {
        const p = currentMission.patient_profile;
        content.innerHTML = `<h5 class="fw-bold text-primary mb-3">Admission H&P</h5><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">Chief Complaint</h6><p>${p.chief_complaint}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">HPI</h6><p>${p.hpi}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">PMH</h6><p>${p.pmh}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">Review of Systems</h6><ul class="small"><li><strong>Cardio:</strong> ${p.ros.cardio}</li><li><strong>Neuro:</strong> ${p.ros.neuro}</li><li><strong>GI:</strong> ${p.ros.gi}</li><li><strong>GU:</strong> ${p.ros.gu}</li></ul></div>`;
    } else {
        const ex = currentMission.exhibits[type];
        if (ex.type === 'table') {
            content.innerHTML = `<h5 class="fw-bold text-primary mb-3">${ex.title}</h5><table class="table table-bordered table-sm small mt-3"><thead class="table-light"><tr>${Object.keys(ex.data[0]).map(k => `<th>${k.toUpperCase()}</th>`).join('')}</tr></thead><tbody>${ex.data.map(row => `<tr>${Object.values(row).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
        } else { content.innerHTML = `<h5 class="fw-bold text-primary mb-3">${ex.title}</h5><div class="fs-6 mt-3 text-dark">${ex.content}</div>`; }
    }
}

function prevMissionStep() { if (currentStepIndex > 0) { currentStepIndex--; renderMissionStep(); } }

function renderMissionStep() {
    missionFeedbackMode = false;
    const step = currentMission.steps[currentStepIndex];
    const area = document.getElementById('step-area');
    if (!area) return;
    document.getElementById('mission-feedback').innerHTML = '';
    document.getElementById('step-counter').innerText = `STEP ${currentStepIndex + 1} OF ${currentMission.steps.length}`;
    document.getElementById('mission-prev-btn').disabled = currentStepIndex === 0;
    let optsHtml = '';
    if (step.type === 'extended_sata') {
        optsHtml = `<div class="list-group">${step.options.map((o, i) => `<label class="list-group-item list-group-item-action p-3 mb-2"><input class="form-check-input me-3" type="checkbox" name="m-opt" value="${i}"> ${o}</label>`).join('')}</div>`;
    } else if (step.type === 'matrix') {
        optsHtml = `<div class="table-responsive"><table class="matrix-table"><thead><tr><th>Finding</th>${step.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${step.rows.map((r, rowIndex) => `<tr><td class="text-white">${typeof r === 'string' ? r : (r.text || 'Unknown')}</td>${step.columns.map(c => `<td class="radio-cell text-center"><input type="radio" name="matrix-row-${rowIndex}" value="${c}" class="form-check-input"></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    } else if (step.type === 'bowtie') {
        optsHtml = `<div class="bowtie-container"><div class="bowtie-wing"><div class="bowtie-label">Actions (2)</div>${step.left_actions.options.map(o => `<div class="form-check small"><input class="form-check-input" type="checkbox" name="bw-l" value="${o}">${o}</div>`).join('')}</div><div class="bowtie-center"><div class="bowtie-label text-warning">Condition</div><select id="bw-c" class="form-select form-select-sm"><option value="">Select condition...</option>${step.center_condition.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select></div><div class="bowtie-wing"><div class="bowtie-label">Monitor (2)</div>${step.right_monitor.options.map(o => `<div class="form-check small"><input class="form-check-input" type="checkbox" name="bw-r" value="${o}">${o}</div>`).join('')}</div></div>`;
    } else if (step.type === 'drag_drop_cloze') {
        // Drag-and-drop cloze question
        const text = step.text || '';
        const blanks = step.blanks || [];
        const options = step.options || [];

        // Replace [BLANK_X] placeholders with drop zones
        let processedText = text;
        blanks.forEach((blank, idx) => {
            processedText = processedText.replace(`[BLANK_${idx + 1}]`, `<span class="drop-zone" data-blank-id="${idx}" data-correct="${blank.correct}">_____</span>`);
        });

        const optionsHtml = options.map(opt => `<span class="draggable-option" draggable="true" data-option="${opt}">${opt}</span>`).join('');

        optsHtml = `
            <div class="drag-drop-cloze">
                <div class="cloze-text mb-4">${processedText}</div>
                <div class="options-pool mb-3">
                    <div class="options-label">Available options:</div>
                    <div class="options-container">${optionsHtml}</div>
                </div>
                <div class="cloze-instructions">Drag options into the blanks</div>
            </div>
        `;
    } else if (step.type === 'highlight_select') {
        // Highlighted text selection question
        const text = step.text || '';
        const highlights = step.highlights || [];
        const selectionMode = step.selection_mode || 'multiple'; // 'single' or 'multiple'

        // Create text with clickable highlights
        let processedText = text;
        highlights.forEach((highlight, idx) => {
            const highlightClass = highlight.correct ? 'highlight-correct' : 'highlight-distractor';
            const clickHandler = selectionMode === 'single' ?
                `onclick="selectHighlight(this, ${idx}, 'single')"` :
                `onclick="toggleHighlight(this, ${idx})"`;
            processedText = processedText.replace(
                highlight.text,
                `<span class="text-highlight ${highlightClass}" ${clickHandler} data-highlight-id="${idx}" data-correct="${highlight.correct}">${highlight.text}</span>`
            );
        });

        const inputType = selectionMode === 'single' ? 'radio' : 'checkbox';
        const instruction = step.instruction || (selectionMode === 'single' ?
            'Click on the most significant finding requiring nursing intervention:' :
            'Click on all sections requiring nursing intervention:');

        optsHtml = `
            <div class="highlight-select">
                <div class="highlight-instruction mb-3">${instruction}</div>
                <div class="highlight-text">${processedText}</div>
                <input type="hidden" id="highlight-selection" value="">
            </div>
        `;
    } else if (step.options && step.options.length > 0) {
        // Default case: regular multiple choice questions (including exam questions)
        const isMultipleChoice = step.answer && step.answer.length > 1;
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const inputName = 'm-opt';

        optsHtml = `<div class="list-group">${step.options.map((o, i) => `<label class="list-group-item list-group-item-action p-3 mb-2"><input class="form-check-input me-3" type="${inputType}" name="${inputName}" value="${i}"> ${o}</label>`).join('')}</div>`;
    }
    area.innerHTML = `<div class="mission-title-display mb-3"><small class="text-accent">MISSION ${currentMission.numerical_id}: ${currentMission.title}</small></div><div class="step-badge">STEP ${currentStepIndex + 1}: ${step.type ? step.type.toUpperCase() : 'MULTIPLE CHOICE'}</div><h3 class="text-white mb-4 fw-bold">${step.prompt}</h3><div>${optsHtml}</div>`;
    const btn = document.getElementById('mission-action-btn');
    btn.innerText = "SUBMIT ANSWER";
    btn.className = "btn btn-warning btn-lg px-5 fw-bold shadow";

    // Add event listeners for drag-and-drop cloze questions
    if (step.type === 'drag_drop_cloze') {
        // Add drag event listeners to draggable options
        document.querySelectorAll('.draggable-option').forEach(option => {
            option.ondragstart = handleDragStart;
            option.ondragend = handleDragEnd;
        });

        // Add drop event listeners to drop zones
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.ondragover = handleDragOver;
            zone.ondrop = handleDrop;
        });
    }
}

function handleMissionAction() { if (!missionFeedbackMode) evaluateMissionStep(); else nextMissionStep(); }

// Drag and drop functionality for cloze questions
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.target.closest('.drop-zone');
    if (!dropZone || !draggedElement) return;

    // Remove existing content from drop zone
    dropZone.innerHTML = '';

    // Clone the dragged element and place it in the drop zone
    const clone = draggedElement.cloneNode(true);
    clone.draggable = false;
    clone.classList.remove('dragging');
    clone.classList.add('dropped-option');
    clone.onclick = () => removeFromDropZone(clone, dropZone);

    dropZone.appendChild(clone);
    dropZone.classList.add('filled');

    // Remove from options pool
    draggedElement.remove();

    return false;
}

function removeFromDropZone(element, dropZone) {
    // Return option to pool
    const optionText = element.textContent;
    const optionsContainer = document.querySelector('.options-container');
    const newOption = document.createElement('span');
    newOption.className = 'draggable-option';
    newOption.draggable = true;
    newOption.textContent = optionText;
    newOption.ondragstart = handleDragStart;
    newOption.ondragend = handleDragEnd;

    optionsContainer.appendChild(newOption);

    // Clear drop zone
    dropZone.innerHTML = '_____';
    dropZone.classList.remove('filled');
}

// Highlight selection functions
function toggleHighlight(element, highlightId) {
    element.classList.toggle('selected');
    updateHighlightSelection();
}

function selectHighlight(element, highlightId, mode) {
    if (mode === 'single') {
        // Remove selection from all highlights
        document.querySelectorAll('.text-highlight').forEach(el => el.classList.remove('selected'));
    }
    element.classList.add('selected');
    updateHighlightSelection();
}

function updateHighlightSelection() {
    const selected = Array.from(document.querySelectorAll('.text-highlight.selected'))
        .map(el => parseInt(el.dataset.highlightId));
    document.getElementById('highlight-selection').value = JSON.stringify(selected);
}

function evaluateMissionStep() {
    const step = currentMission.steps[currentStepIndex];
    let isCorrect = false;
    if (step.type === 'extended_sata') {
        const sel = Array.from(document.querySelectorAll('input[name="m-opt"]:checked')).map(i => parseInt(i.value));
        isCorrect = sel.length === step.answer.length && sel.every(v => step.answer.includes(v));
    } else if (step.type === 'standard' || (!step.type && step.options)) {
        // Regular multiple choice or exam questions
        const sel = Array.from(document.querySelectorAll('input[name="m-opt"]:checked')).map(i => parseInt(i.value));
        isCorrect = sel.length === step.answer.length && sel.every(v => step.answer.includes(v));
    } else if (step.type === 'matrix') {
        isCorrect = step.rows.every((r, rowIndex) => {
            const rowKey = typeof r === 'string' ? r : (r.text || '');
            return document.querySelector(`input[name="matrix-row-${rowIndex}"]:checked`)?.value === step.answer[rowKey];
        });
    } else if (step.type === 'drag_drop_cloze') {
        // Check if all blanks are filled correctly
        const blanks = step.blanks || [];
        isCorrect = blanks.every((blank, idx) => {
            const dropZone = document.querySelector(`.drop-zone[data-blank-id="${idx}"]`);
            if (!dropZone || !dropZone.classList.contains('filled')) return false;
            const droppedText = dropZone.textContent.trim();
            return droppedText === blank.correct;
        });
    } else if (step.type === 'highlight_select') {
        // Check selected highlights
        const selected = JSON.parse(document.getElementById('highlight-selection').value || '[]');
        const correctHighlights = step.highlights.filter(h => h.correct).map(h => step.highlights.indexOf(h));
        isCorrect = selected.length === correctHighlights.length &&
                   selected.every(id => correctHighlights.includes(id));
    } else if (step.type === 'bowtie') {
        const diag = document.getElementById('bw-c').value;
        const l = Array.from(document.querySelectorAll('input[name="bw-l"]:checked')).map(i => i.value);
        const r = Array.from(document.querySelectorAll('input[name="bw-r"]:checked')).map(i => i.value);
        isCorrect = diag === step.center_condition.answer && l.length === 2 && l.every(v => step.left_actions.answer.includes(v)) && r.length === 2 && r.every(v => step.right_monitor.answer.includes(v));
    }
    document.getElementById('mission-feedback').innerHTML = `<div class="p-4 rounded-4 border-2 ${isCorrect ? 'border-success' : 'border-danger'}" style="background: ${isCorrect ? 'rgba(22, 101, 52, 0.3)' : 'rgba(153, 27, 27, 0.3)'}; backdrop-filter: blur(10px);"><h4 class="fw-bold ${isCorrect ? 'text-success' : 'text-danger'}"><i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} me-2"></i>${isCorrect ? 'CORRECT' : 'INCORRECT'}</h4><p class="text-white mb-0 mt-2 fs-5">${step.rationale || "Review clues and pharmacology interaction."}</p></div>`;
    missionFeedbackMode = true;
    const btn = document.getElementById('mission-action-btn');
    btn.innerText = currentStepIndex === currentMission.steps.length - 1 ? "FINISH MISSION" : "NEXT STEP";
    btn.className = "btn btn-info btn-lg px-5 fw-bold shadow pulse-button text-primary";
}

function nextMissionStep() { if (currentStepIndex < currentMission.steps.length - 1) { currentStepIndex++; renderMissionStep(); } else { closeMission(); } }
