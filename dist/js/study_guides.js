window.studyGuides = [
    // Med Surg GI
    { id: 'quiz3_upper_gi', name: 'Quiz 3: Upper GI Disorders & Meds', type: 'Comprehensive', icon: 'fa-stomach', color: '#10b981', category: 'Med-Surg' },
    { id: 'quiz4_lower_gi', name: 'Quiz 4: Lower GI Disorders & Meds', type: 'Comprehensive', icon: 'fa-lungs-virus', color: '#10b981', category: 'Med-Surg' },
    
    // Pediatrics
    { id: 'peds_quiz1_ch15_19', name: 'PEDS Quiz 1 (Ch 15-19)', type: 'Comprehensive', icon: 'fa-child', color: '#f59e0b', category: 'Pediatrics' },
    { id: 'peds_quiz2_ch20_24', name: 'PEDS Quiz 2 (Ch 20-24)', type: 'Comprehensive', icon: 'fa-child', color: '#f59e0b', category: 'Pediatrics' },

    // Maternity/OB
    { id: 'ob_cheatsheet', name: 'OB: Fetal Development, Prenatal Care & Adaptations', type: 'Cheat Sheet', icon: 'fa-bolt', color: '#06b6d4', category: 'Maternity/OB' },
    { id: 'ob_comprehensive', name: 'OB: Fetal Development, Prenatal Care & Adaptations', type: 'Comprehensive', icon: 'fa-book-medical', color: '#3b82f6', category: 'Maternity/OB' },
    { id: 'ob_ch678_cheatsheet', name: 'OB: Labor, Birth & Complications (Ch 6-8)', type: 'Cheat Sheet', icon: 'fa-bolt', color: '#06b6d4', category: 'Maternity/OB' },
    { id: 'ob_ch678_comprehensive', name: 'OB: Labor, Birth & Complications (Ch 6-8)', type: 'Comprehensive', icon: 'fa-book-medical', color: '#3b82f6', category: 'Maternity/OB' },
    { id: 'ob_ch912_cheatsheet', name: 'OB: Postpartum & Newborn (Ch 9-12)', type: 'Cheat Sheet', icon: 'fa-bolt', color: '#06b6d4', category: 'Maternity/OB' },
    { id: 'ob_ch912_comprehensive', name: 'OB: Postpartum & Newborn (Ch 9-12)', type: 'Comprehensive', icon: 'fa-book-medical', color: '#3b82f6', category: 'Maternity/OB' },
    { id: 'cms_maternal_cheatsheet', name: 'ATI CMS Maternal Newborn', type: 'Cheat Sheet', icon: 'fa-bolt', color: '#ef4444', category: 'Maternity/OB' },
    { id: 'cms_maternal_comprehensive', name: 'ATI CMS Maternal Newborn', type: 'Comprehensive', icon: 'fa-book-medical', color: '#ef4444', category: 'Maternity/OB' }
];

function showStudyGuideSelector() {
    const guides = window.studyGuides || [];
    const categories = [...new Set(guides.map(g => g.category))];
    let listHtml = '';
    
    categories.forEach(cat => {
        const catGuides = guides.filter(g => g.category === cat);
        listHtml += `<h5 class="text-accent fw-bold mt-4 mb-3"><i class="fas fa-folder-open me-2"></i>${cat}</h5>`;
        
        catGuides.forEach(guide => {
            listHtml += `
                <div class="card bg-dark border-secondary mb-3 hover-lift" style="cursor:pointer;" onclick="openStudyGuide('${guide.id}')">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="me-3 text-center" style="width: 40px;">
                                <i class="fas ${guide.icon} fa-2x" style="color: ${guide.color};"></i>
                            </div>
                            <div>
                                <h6 class="mb-1 text-white fw-bold">${guide.name}</h6>
                                <span class="badge" style="background-color: ${guide.color};">${guide.type}</span>
                            </div>
                            <div class="ms-auto text-secondary">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    });

    const html = `
        <div id="studyGuideSelectorModal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:var(--primary);z-index:1000;overflow-y:auto;padding-bottom:50px;">
            <div class="container py-4" style="max-width:800px;">
                <div class="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3 border-secondary position-sticky bg-dark" style="top:0;z-index:10;padding-top:10px;background:var(--primary) !important;">
                    <h3 class="text-accent fw-bold mb-0"><i class="fas fa-book-open me-2"></i>Study Guides</h3>
                    <button class="btn btn-outline-danger btn-sm" onclick="document.getElementById('studyGuideSelectorModal').remove(); showHomeScreen();">Close</button>
                </div>
                <div>${listHtml}</div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function openStudyGuide(guideId) {
    try {
        document.getElementById('studyGuideSelectorModal')?.remove();
        const content = window.studyGuideContent[guideId];
        if (!content) { alert('Study guide not found.'); return; }
        
        const guide = window.studyGuides.find(g => g.id === guideId);
        
        // Simple markdown renderer just in case marked.js fails to load
        let renderedHtml = "";
        if (typeof marked !== 'undefined') {
            renderedHtml = marked.parse(content);
        } else {
            console.warn("marked.js is not loaded, falling back to raw text");
            renderedHtml = "<pre style='color:white; white-space: pre-wrap;'>" + content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</pre>";
        }

        const html = `
            <div id="studyGuideViewerModal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:var(--primary);z-index:2000;overflow-y:auto;">
                <div class="container py-4" style="max-width:900px;">
                    <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary position-sticky bg-dark" style="top:0;z-index:10;padding-top:10px;background:var(--primary) !important;">
                        <div>
                            <h4 class="text-accent fw-bold mb-1">${guide ? guide.name : 'Study Guide'}</h4>
                            <span class="badge" style="background:${guide ? guide.color : '#06b6d4'};">${guide ? guide.type : ''}</span>
                        </div>
                        <button class="btn btn-outline-secondary btn-sm" onclick="document.getElementById('studyGuideViewerModal').remove(); showStudyGuideSelector();"><i class="fas fa-arrow-left me-1"></i> Back</button>
                    </div>
                    
                    <div class="markdown-body bg-dark text-white p-4 rounded border border-secondary" style="font-size:1.05rem; line-height:1.6;">
                        ${renderedHtml}
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
    } catch(e) {
        console.error('openStudyGuide error for', guideId, e);
        alert('Error loading study guide: ' + e.message);
        showHomeScreen();
    }
}
