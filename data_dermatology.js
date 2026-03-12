/* Dermatology Drugs - NCLEX Essential
   Common topical and systemic dermatologic agents */

const data_dermatology = [
    {
        g: "Hydrocortisone", b: "Cortaid, Cortizone-10", c: "Topical Corticosteroid (Low Potency)", cat: "derm",
        m: "Binds to intracellular glucocorticoid receptors → inhibits phospholipase A2 → reduces arachidonic acid release → decreases prostaglandins and leukotrienes. Anti-inflammatory, antipruritic, and vasoconstrictive effects.",
        ind: "Mild inflammatory skin conditions: contact dermatitis, eczema, insect bites, minor rashes, diaper rash. Safe for face and intertriginous areas.",
        con: "Viral skin infections (herpes, varicella). Fungal infections (unless combined with antifungal). Bacterial skin infections. Rosacea, perioral dermatitis.",
        aec: "Skin atrophy with prolonged use. Striae (stretch marks). Telangiectasia. Burning/stinging on application. Folliculitis.",
        aes: "HPA axis suppression (rare with topical). Cushing syndrome (prolonged large-area use). Skin ulceration. Secondary infection.",
        inter: [
            {d: "Other corticosteroids", m: "Additive HPA suppression", s: "med"}
        ],
        dosage: "Apply thin layer to affected area 2-4 times daily. OTC: 0.5-1%. Rx: up to 2.5%.",
        admin: "Clean and dry area before application. Rub in gently. Do NOT cover with occlusive dressing unless directed. Avoid eyes and mucous membranes.",
        nurse: "⚠️ TEACH: Use lowest potency for shortest duration. Do NOT use on face for >2 weeks without MD guidance. Watch for skin thinning, especially in elderly. If no improvement in 2 weeks, reassess diagnosis. Do NOT stop abruptly after prolonged use."
    },
    {
        g: "Triamcinolone", b: "Kenalog, Aristocort", c: "Topical Corticosteroid (Medium Potency)", cat: "derm",
        m: "Intermediate-potency fluorinated corticosteroid. Inhibits inflammatory mediators. More potent anti-inflammatory effect than hydrocortisone due to fluorination.",
        ind: "Moderate inflammatory dermatoses: psoriasis, eczema, allergic dermatitis, lichen planus. NOT for face or groin without careful monitoring.",
        con: "Primary skin infections. Facial use (risk of atrophy). Perioral dermatitis. Rosacea. Children <2 years.",
        aec: "Skin atrophy. Hypopigmentation. Acneiform eruptions. Delayed wound healing. Perioral dermatitis (if used on face).",
        aes: "HPA axis suppression. Cushing syndrome. Glaucoma (periorbital use). Severe skin atrophy with striae.",
        inter: [
            {d: "Occlusive dressings", m: "Increases absorption 10-fold", s: "high"}
        ],
        dosage: "Apply thin film 2-3 times daily. Cream: 0.025-0.5%. Ointment for dry, scaly lesions.",
        admin: "Apply sparingly. Ointments more occlusive than creams. Avoid prolonged use on thin-skinned areas. Taper if used >2 weeks.",
        nurse: "⚠️ STRONGER than hydrocortisone — not for mild conditions. Avoid face, axillae, groin. Monitor for skin changes. Teach patient to use fingertip unit (FTU) dosing. If condition worsens, suspect secondary infection or contact allergy to vehicle."
    },
    {
        g: "Clobetasol", b: "Temovate, Clobex, Olux", c: "Topical Corticosteroid (Super-High Potency)", cat: "derm",
        m: "Most potent topical corticosteroid available. Profound anti-inflammatory and immunosuppressive effects. Reserved for severe, resistant dermatoses.",
        ind: "Severe psoriasis (plaque). Severe eczema/dermatitis unresponsive to lower-potency steroids. Discoid lupus. Lichen planus.",
        con: "Face, groin, axillae. Primary skin infections. Rosacea. Perioral dermatitis. Children. Pregnancy (use only if clearly needed).",
        aec: "Rapid skin atrophy. Telangiectasia. Striae (often permanent). Burning, stinging. Folliculitis. Hypopigmentation.",
        aes: "HPA axis suppression (common with prolonged use). Cushing syndrome. Adrenal insufficiency on withdrawal. Glaucoma, cataracts (periorbital).",
        inter: [
            {d: "Other corticosteroids", m: "Cumulative HPA suppression", s: "high"},
            {d: "Occlusive dressings", m: "Dramatically increases systemic absorption", s: "high"}
        ],
        dosage: "Apply thin layer 1-2 times daily. MAX: 50g/week, 2 consecutive weeks. Do NOT exceed 2 weeks continuous use.",
        admin: "Use for shortest duration possible. Never use under occlusion. Never use on face. Taper or switch to lower potency when controlled.",
        nurse: "⚠️ SUPER-HIGH POTENCY — reserve for severe cases only. Strict 2-week limit. Never on face/groin/axillae. Monitor for adrenal suppression signs (fatigue, hypotension). Permanent striae can occur rapidly. Educate: 'Stronger is not always better.'"
    },
    {
        g: "Mupirocin", b: "Bactroban, Centany", c: "Topical Antibiotic", cat: "derm",
        m: "Inhibits bacterial isoleucyl-tRNA synthetase → blocks protein synthesis. Bactericidal at high concentrations. Excellent against gram-positive organisms including MRSA.",
        ind: "Impetigo. Secondary skin infections. MRSA decolonization (nasal). Minor wounds, burns, lacerations with infection risk.",
        con: "Hypersensitivity to mupirocin or polyethylene glycol base. Large open wounds (systemic absorption of PEG).",
        aec: "Burning, stinging at application site. Pruritus. Contact dermatitis. Dry skin.",
        aes: "Rare: Severe allergic reaction. Superinfection with prolonged use. C. difficile (rare with topical).",
        inter: [
            {d: "Other topical products", m: "May decrease efficacy if mixed", s: "low"}
        ],
        dosage: "Skin: Apply small amount 3 times daily for 5-10 days. Nasal (MRSA decolonization): Apply to each nostril BID x 5 days.",
        admin: "Clean wound before application. May cover with gauze. Nasal: Apply with cotton swab, press nostrils together to distribute.",
        nurse: "⚠️ EFFECTIVE AGAINST MRSA — often first-line for skin MRSA. Complete full course even if improved. Nasal decolonization: teach proper technique. Watch for resistance with overuse. Not for large wounds (PEG toxicity risk in renal impairment)."
    },
    {
        g: "Benzoyl Peroxide", b: "Clearasil, PanOxyl, Benzac", c: "Topical Acne Agent (Keratolytic/Antibacterial)", cat: "derm",
        m: "Releases free oxygen radicals → bactericidal against P. acnes. Keratolytic effect breaks down keratin in follicles. Reduces comedones and inflammatory lesions.",
        ind: "Acne vulgaris (mild to moderate). Often combined with topical antibiotics or retinoids.",
        con: "Hypersensitivity. Very sensitive skin. Open wounds.",
        aec: "Dryness, peeling, erythema (common initially). Bleaching of hair, fabrics, towels. Contact dermatitis.",
        aes: "Severe allergic reaction (rare). Severe skin irritation requiring discontinuation.",
        inter: [
            {d: "Tretinoin", m: "May cause excessive irritation if applied together; apply at different times", s: "med"},
            {d: "Dapsone topical", m: "Causes temporary orange/yellow skin discoloration", s: "med"}
        ],
        dosage: "Start with 2.5% once daily, increase to 5-10% as tolerated. Apply once or twice daily.",
        admin: "Start low concentration, increase gradually. Apply to dry skin. Avoid eyes, lips, mucous membranes. Use sunscreen (increases photosensitivity).",
        nurse: "⚠️ WARN ABOUT BLEACHING — will stain towels, pillowcases, clothing. Start low (2.5%) to minimize irritation. Dryness/peeling is expected initially — use oil-free moisturizer. Takes 6-8 weeks for full effect. Can use with antibiotics to prevent resistance."
    },
    {
        g: "Tretinoin", b: "Retin-A, Renova, Atralin", c: "Topical Retinoid", cat: "derm",
        m: "Vitamin A derivative that binds retinoic acid receptors → normalizes follicular keratinization → reduces comedone formation. Increases cell turnover, promotes collagen synthesis.",
        ind: "Acne vulgaris. Photoaging (fine wrinkles, mottled hyperpigmentation). Adjunct for melasma.",
        con: "⚠️ PREGNANCY (Category C but treated as X) — teratogenic. Eczema. Sunburn. Concurrent use of irritating products.",
        aec: "Dryness, peeling, erythema (retinoid dermatitis). Photosensitivity (SEVERE). Initial acne flare ('purging'). Burning, stinging.",
        aes: "Severe irritation. Blistering. Hyperpigmentation (paradoxical, especially in darker skin tones).",
        inter: [
            {d: "Benzoyl peroxide", m: "Oxidizes tretinoin if applied simultaneously", s: "med"},
            {d: "Other drying agents", m: "Additive irritation", s: "med"},
            {d: "Photosensitizing drugs", m: "Increased sun sensitivity", s: "med"}
        ],
        dosage: "Apply pea-sized amount to entire face once daily at bedtime. Start every other night if sensitive.",
        admin: "Apply to DRY skin 20-30 minutes after washing (wet skin increases absorption and irritation). Avoid eyes, mouth, angles of nose. Use sunscreen daily (SPF 30+).",
        nurse: "⚠️ TERATOGENIC — ensure negative pregnancy test, discuss contraception. Expect initial worsening ('purging') weeks 2-6. Takes 8-12 weeks for improvement. MUST use sunscreen daily. Apply at NIGHT only. Start slow — every other night acceptable. Peeling = normal; blistering = stop."
    },
    {
        g: "Adapalene", b: "Differin, Epiduo (with BP)", c: "Topical Retinoid", cat: "derm",
        m: "Third-generation retinoid that selectively binds RAR-beta and RAR-gamma receptors. Normalizes keratinization, reduces inflammation. Better tolerated than tretinoin.",
        ind: "Acne vulgaris (now OTC 0.1%). Preferred retinoid for sensitive skin or retinoid-naive patients.",
        con: "Pregnancy. Eczematous skin. Sunburned skin.",
        aec: "Dryness, scaling (less than tretinoin). Erythema. Mild burning. Photosensitivity (less than tretinoin).",
        aes: "Severe irritation (rare). Allergic contact dermatitis.",
        inter: [
            {d: "Other retinoids", m: "Do not combine — no added benefit, increased irritation", s: "high"},
            {d: "Harsh cleansers/scrubs", m: "Increased irritation", s: "med"}
        ],
        dosage: "Apply thin layer once daily at bedtime. OTC: 0.1% gel. Rx: 0.1% and 0.3%.",
        admin: "Apply to dry skin. Gentler than tretinoin — good starting retinoid. Can combine with benzoyl peroxide (apply at different times or use combo product).",
        nurse: "⚠️ NOW OTC (Differin 0.1%) — first OTC retinoid. Good choice for retinoid beginners — less irritating. Still needs pregnancy counseling. Takes 8-12 weeks for results. Less photosensitivity than tretinoin but still recommend sunscreen."
    },
    {
        g: "Clindamycin Topical", b: "Cleocin T, Clindagel, Evoclin", c: "Topical Antibiotic (Acne)", cat: "derm",
        m: "Lincosamide antibiotic that inhibits bacterial protein synthesis (50S ribosomal subunit). Reduces P. acnes colonization and inflammation.",
        ind: "Inflammatory acne vulgaris. Usually combined with benzoyl peroxide to prevent resistance.",
        con: "History of antibiotic-associated colitis. Regional enteritis. Ulcerative colitis.",
        aec: "Dryness. Oily skin (solution formulation). Peeling. Erythema. Burning/stinging.",
        aes: "Pseudomembranous colitis (rare but reported with topical). Antibiotic resistance development.",
        inter: [
            {d: "Erythromycin topical", m: "Antagonistic — do not combine", s: "high"},
            {d: "Neuromuscular blockers", m: "May enhance blockade (systemic absorption)", s: "low"}
        ],
        dosage: "Apply thin film twice daily (morning and evening). Available as solution, gel, lotion, foam, pledgets.",
        admin: "Apply to entire affected area, not just spots. ALWAYS combine with benzoyl peroxide to prevent P. acnes resistance.",
        nurse: "⚠️ NEVER USE ALONE — monotherapy leads to antibiotic resistance. Always pair with benzoyl peroxide (can use combo product like Duac, BenzaClin). Rare but report any diarrhea — topical can cause C. diff. Lotion/foam better for larger areas."
    },
    {
        g: "Ketoconazole Topical", b: "Nizoral, Xolegel, Extina", c: "Topical Antifungal (Azole)", cat: "derm",
        m: "Imidazole antifungal that inhibits fungal cytochrome P450 enzyme (14-alpha demethylase) → blocks ergosterol synthesis → disrupts fungal cell membrane integrity.",
        ind: "Tinea infections (corporis, cruris, pedis, versicolor). Seborrheic dermatitis. Dandruff (shampoo).",
        con: "Hypersensitivity to azoles.",
        aec: "Local irritation. Pruritus. Stinging. Dryness.",
        aes: "Severe allergic reaction (rare). Contact dermatitis.",
        inter: [
            {d: "Topical corticosteroids", m: "Often combined beneficially for seborrheic dermatitis", s: "low"}
        ],
        dosage: "Cream/gel: Apply once or twice daily for 2-4 weeks. Shampoo: Use twice weekly, leave on 3-5 minutes.",
        admin: "Continue 2 weeks after symptoms resolve to prevent recurrence. Shampoo can be used on body for tinea versicolor (leave on 5 min before rinsing).",
        nurse: "⚠️ COMMON NCLEX: Tinea versicolor — causes hypopigmented patches, worse in summer. Shampoo formulation works for scalp AND body tinea. Teach: Tinea pedis — dry feet thoroughly, wear breathable shoes. Complete full course even if improved."
    },
    {
        g: "Terbinafine Topical", b: "Lamisil AT, Lamisil", c: "Topical Antifungal (Allylamine)", cat: "derm",
        m: "Allylamine antifungal that inhibits squalene epoxidase → blocks ergosterol synthesis earlier in pathway than azoles. Fungicidal (kills fungi) vs. azoles (fungistatic).",
        ind: "Tinea pedis (athlete's foot). Tinea cruris (jock itch). Tinea corporis (ringworm). Often preferred for dermatophyte infections.",
        con: "Hypersensitivity to terbinafine.",
        aec: "Local irritation. Burning. Dryness. Redness.",
        aes: "Allergic reaction (rare with topical).",
        inter: [],
        dosage: "Apply once or twice daily for 1-4 weeks depending on infection site. Tinea pedis: 2-4 weeks. Tinea cruris/corporis: 1-2 weeks.",
        admin: "Clean and dry affected area before application. Apply to surrounding healthy skin as well. OTC for most tinea infections.",
        nurse: "⚠️ FUNGICIDAL — often more effective than azoles for dermatophytes. Shorter treatment course than azoles. Oral form used for onychomycosis (nail fungus) — requires liver monitoring. Topical OTC for athlete's foot, jock itch."
    },
    {
        g: "Permethrin", b: "Elimite, Nix, Acticin", c: "Topical Antiparasitic (Scabicide/Pediculicide)", cat: "derm",
        m: "Synthetic pyrethroid that disrupts sodium channel function in parasites → causes paralysis and death of scabies mites and lice. Ovicidal (kills eggs).",
        ind: "Scabies (5% cream). Head lice / Pediculosis (1% cream rinse OTC). Pubic lice.",
        con: "Hypersensitivity to pyrethrins/pyrethroids or chrysanthemums. Infants <2 months (scabies).",
        aec: "Pruritus (may worsen initially). Burning, stinging. Tingling. Erythema. Rash.",
        aes: "Severe allergic reaction. Seizures (very rare, usually with misuse).",
        inter: [],
        dosage: "SCABIES (5%): Apply from neck down to entire body, leave on 8-14 hours (overnight), rinse off. Repeat in 7 days. LICE (1%): Apply to clean, damp hair, leave 10 minutes, rinse.",
        admin: "Scabies: Apply to ALL skin from jawline down including under nails, between fingers/toes, buttocks, genitals. Wash all bedding, clothing in hot water.",
        nurse: "⚠️ NCLEX FAVORITE: Scabies treatment protocol — apply neck to toes, leave overnight, wash off AM. Treat ALL household contacts simultaneously. Wash all linens/clothing in HOT water, dry on high heat. Itching may persist 2-4 weeks after successful treatment (dead mite reaction). Second treatment in 1 week."
    },
    {
        g: "Lindane", b: "Kwell (discontinued brand)", c: "Topical Antiparasitic (Scabicide/Pediculicide)", cat: "derm",
        m: "Organochlorine insecticide that is absorbed through parasite exoskeleton → causes CNS excitation → seizures and death in parasites. Also affects human CNS — neurotoxic.",
        ind: "SECOND-LINE ONLY for scabies and lice when other treatments fail. Rarely used due to neurotoxicity.",
        con: "⚠️ SEIZURE DISORDERS. Premature infants. Neonates. Pregnancy/lactation. Elderly (thin skin increases absorption). Extensive dermatitis (increases absorption).",
        aec: "Skin irritation. Eczematous rash. Pruritus.",
        aes: "⚠️ SEIZURES (especially in children, elderly, or with misuse). CNS toxicity. Aplastic anemia. Neurotoxicity.",
        inter: [
            {d: "Drugs lowering seizure threshold", m: "Increased seizure risk", s: "high"}
        ],
        dosage: "Apply thin layer to dry skin from neck down, leave on 8-12 hours (scabies) or 4 minutes (lice shampoo). ONE application only.",
        admin: "⚠️ APPLY TO DRY SKIN ONLY — wet/damaged skin increases absorption. Do NOT repeat application. Do NOT use after bath (vasodilation increases absorption).",
        nurse: "⚠️ BLACK BOX WARNING: Neurotoxicity, seizures. SECOND-LINE ONLY — use permethrin first. Never use on infants, elderly, pregnant, or seizure patients. ONE application only — never repeat. Apply to COMPLETELY DRY skin. Teach: Not more effective than permethrin, just more toxic."
    },
    {
        g: "Silver Sulfadiazine", b: "Silvadene, SSD, Thermazene", c: "Topical Antimicrobial (Burns)", cat: "derm",
        m: "Releases silver ions that bind to bacterial DNA and cell membranes → bactericidal. Broad-spectrum: gram-positive, gram-negative, yeast. Sulfonamide component also antibacterial.",
        ind: "Prevention and treatment of burn wound infections (second and third-degree burns). Prophylaxis for skin grafts.",
        con: "⚠️ SULFA ALLERGY. Pregnancy near term (kernicterus risk). Premature infants/neonates. G6PD deficiency (hemolysis risk).",
        aec: "Transient leukopenia (usually resolves). Skin discoloration. Burning sensation. Rash. Pruritus.",
        aes: "Bone marrow suppression (rare). Hemolysis in G6PD deficiency. Kernicterus in neonates. Sulfa-related Stevens-Johnson syndrome.",
        inter: [
            {d: "Enzymatic debriding agents", m: "Silver inactivates collagenase — do not use together", s: "high"}
        ],
        dosage: "Apply 1/16-inch thick layer to burn wound once or twice daily. Keep wound covered at all times.",
        admin: "Use sterile technique. Apply with gloved hand or sterile applicator. Reapply when rubbed off or removed by activity. Continue until healing or ready for grafting.",
        nurse: "⚠️ SULFA DRUG — assess allergy. Monitor CBC weekly (transient leukopenia common days 2-4, usually resolves). Creates pseudoeschar (white/gray coating) — normal, not infection. May delay wound healing slightly. NOT for facial burns (use alternative). Stains gray — normal."
    },
    {
        g: "Calamine", b: "Caladryl (with diphenhydramine)", c: "Topical Antipruritic/Astringent", cat: "derm",
        m: "Zinc oxide + iron oxide mixture. Provides protective barrier, mild antiseptic effect, cooling sensation through evaporation. Counterirritant effect distracts from itch.",
        ind: "Poison ivy/oak/sumac. Insect bites. Chickenpox. Sunburn. Minor skin irritations.",
        con: "Do not apply to open wounds, blistered skin, or weeping lesions.",
        aec: "Skin dryness. Contact dermatitis (rare).",
        aes: "None significant with proper use.",
        inter: [],
        dosage: "Apply to affected area as needed, up to 3-4 times daily. Shake well before use.",
        admin: "Apply with cotton ball or clean hands. Allow to dry. Can be washed off and reapplied. Avoid eyes and mucous membranes.",
        nurse: "OTC and safe for most patients including children. Helps dry weeping lesions (poison ivy). Pink color is cosmetic (iron oxide). Caladryl contains diphenhydramine — avoid systemic diphenhydramine concurrently. Teach: For poison ivy, wash all clothing/objects that contacted plant oil."
    },
    {
        g: "Diphenhydramine Topical", b: "Benadryl Cream/Spray", c: "Topical Antihistamine", cat: "derm",
        m: "H1-receptor antagonist applied topically provides local antipruritic effect. Also has mild local anesthetic properties.",
        ind: "Insect bites. Poison ivy/oak (mild). Minor burns. Sunburn. Pruritus.",
        con: "Chickenpox. Measles. Extensive area application. Blistered/broken skin.",
        aec: "Local irritation. Photosensitivity. Drowsiness (with large area application).",
        aes: "Allergic contact dermatitis. Systemic absorption toxicity (especially in children with large area use).",
        inter: [
            {d: "Oral diphenhydramine", m: "Additive systemic effects — avoid concurrent use", s: "high"},
            {d: "Other CNS depressants", m: "Additive sedation if absorbed systemically", s: "med"}
        ],
        dosage: "Apply to affected area 3-4 times daily. Do not exceed 25g per day or 25% body surface area.",
        admin: "Do not use on large areas, broken skin, or in children under 2 without medical advice. Avoid with concurrent oral antihistamines.",
        nurse: "⚠️ SYSTEMIC ABSORPTION WARNING — topical diphenhydramine CAN cause systemic anticholinergic effects, especially in children and elderly. Do NOT use with oral Benadryl. Do NOT use on chickenpox (extensive area). For large areas or children, use calamine or hydrocortisone instead."
    },
    {
        g: "Minoxidil Topical", b: "Rogaine, Theroxidil", c: "Hair Growth Stimulant", cat: "derm",
        m: "Originally oral antihypertensive. Topically: opens potassium channels → vasodilation of scalp blood vessels → improves follicle nutrition. Also prolongs anagen (growth) phase of hair cycle.",
        ind: "Androgenetic alopecia (male and female pattern baldness). Must use continuously to maintain effect.",
        con: "Hypersensitivity. Pregnancy/breastfeeding (Category C). Do not use on other body areas (causes unwanted hair growth).",
        aec: "Scalp irritation. Dryness. Scaling. Pruritus. Initial hair shedding (first 2-4 weeks). Unwanted facial hair (especially women).",
        aes: "Hypotension, tachycardia (rare, with excessive use or broken skin). Chest pain. Edema.",
        inter: [
            {d: "Antihypertensives", m: "May have additive hypotensive effects if absorbed", s: "low"},
            {d: "Retinoids (topical)", m: "May increase minoxidil absorption", s: "med"}
        ],
        dosage: "Apply 1mL to affected scalp areas twice daily. Men: 2% or 5% solution. Women: 2% typically (5% may cause facial hair).",
        admin: "Apply to DRY scalp. Do not wash hair for 4 hours after application. Wash hands thoroughly after applying. Takes 4-6 months to see results.",
        nurse: "SET EXPECTATIONS: Takes 4-6 months for visible results. Initial shedding is NORMAL (old hairs falling to make way for new). Must use FOREVER — stopping causes loss of new hair within 3-6 months. Women should use 2% to avoid facial hair. Watch for cardiac symptoms with overuse."
    }
];
