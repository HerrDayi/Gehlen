/**
 * Arnold Gehlen: Das Mängelwesen und seine Kultur (1940 / 1942)
 * Interaktive Texterschließung & Hilfe zu Aufgabe 2
 * Philosophie Q1 • Herr Dayi
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. SYSTEMATISCHE BEGRIFFSDATENBANK (4 KATEGORIEN NACH VORGABE)
    // =========================================================================
    const vocabDatabase = {
        // --- 1. Veraltete und gehobene Sprachformen (Sprachliche Hürden) ---
        'vergüten': {
            type: '1. Veraltete & gehobene Sprachform',
            def: 'Nicht im finanziellen Sinne gemeint, sondern im Sinne von „ausgleichen“, „kompensieren“ oder „wiedergutmachen“.',
            context: 'Der Mensch gleicht seine organischen Defizite und körperlichen Schwächen durch Intelligenz, Arbeitsfähigkeit und freigelegte Hände aus.'
        },
        'primitivisieren / Primitivismen': {
            type: '1. Veraltete & gehobene Sprachform / Entwicklungsbiologie',
            def: 'Im biologischen Sinne keine moralische oder intellektuelle Abwertung. Es bezeichnet das Verbleiben in einem ursprünglichen, unfertigen oder ungesicherten Entwicklungszustand.',
            context: 'Gehlen meint damit einerseits die biologische Unfertigkeit der menschlichen Organe und andererseits die akute Gefahr des Rückfalls in unberechenbare Verhaltensmuster, wenn schützende Institutionen wegfallen.'
        },
        'entformt': {
            type: '1. Veraltete & gehobene Sprachform',
            def: 'Begriff für den Verlust von innerer Haltung, festen Regeln und sozialer Struktur.',
            context: 'Ein Zustand des Verfalls, in dem Triebe, rohe Affekte und unberechenbare Verhaltensweisen ungefiltert durchbrechen, sobald ordnende Institutionen fehlen.'
        },
        'Inbegriff': {
            type: '1. Veraltete & gehobene Sprachform',
            def: 'Die Gesamtheit oder das zusammenfassende Wesen aller Erscheinungen.',
            context: 'Hier die Summe von allem, was der Mensch planvoll handelnd aus der Roh-Natur ins Lebensdienliche umgearbeitet hat: die Kultur.'
        },

        // --- 2. Biologisch-fachwissenschaftliche Begriffe (Morphologie & Evolution) ---
        'morphologisch': {
            type: '2. Biologisch-fachwissenschaftlicher Begriff',
            def: 'Den anatomischen Körperbau, die äußere Gestalt und die Beschaffenheit der Sinnes- und Bewegungsorgane betreffend.',
            context: 'Gehlen betrachtet den Menschen rein physisch und stellt fest, dass er morphologisch im Vergleich zu Raubtieren oder Primaten extrem benachteiligt ist.'
        },
        'organische Unspezialisiertheit / biologische Mittellosigkeit': {
            type: '2. Biologisch-fachwissenschaftlicher Begriff',
            def: 'Dem Menschen fehlen spezialisierte Organe für bestimmte Lebensräume (wie Schwimmhäute, Hufen, Reißzähne oder Kälteschutz). Seine Organe – vor allem die Hand – sind morphologisch unspezialisiert und daher flexibel einsetzbar.',
            context: 'Diese biologische Mittellosigkeit zwingt den Menschen, sich Werkzeuge und Waffen zu schaffen, ermöglicht ihm aber auch, fast jeden Lebensraum der Erde flexibel zu besiedeln.'
        },
        'Instinktarmut': {
            type: '2. Biologisch-fachwissenschaftlicher Begriff',
            def: 'Im Gegensatz zum Tier besitzt der Mensch kaum angeborene, starre Auslöser-Reaktions-Mechanismen; er „weiß“ nicht von Natur aus automatisch, wie er auf Gefahren oder Reize reagieren muss.',
            context: 'Ohne Instinkte droht permanente Orientierungslosigkeit und innere Unsicherheit, weshalb Institutionen das Verhalten durch erlernte Gewohnheiten kanalisieren müssen.'
        },
        'spezifische Umwelt vs. Weltoffenheit': {
            type: '2. Biologisch-fachwissenschaftlicher Begriff',
            def: 'Während Tiere passgenau in eine feste Nische („Umwelt“) eingepasst sind, hat der Mensch keine natürliche Schranke.',
            context: '„Weltoffenheit“ bedeutet hier keine Reiselust oder Toleranz, sondern die schutzlose Auslieferung an eine ungefilterte Überflutung mit Außenreizen, die erst durch planvolles Handeln und Kultur bewältigt werden muss.'
        },
        'Witterungsschutz': {
            type: '2. Biologischer Begriff',
            def: 'Der natürliche Schutz vor Kälte, Nässe, Hitze und Wind durch Fell, Federn oder dicke Fettschichten.',
            context: 'Weil der Mensch kein Haarkleid besitzt, muss er Kleidung und Behausungen herstellen, um dem Klima nicht schutzlos ausgeliefert zu sein.'
        },

        // --- 3. Philosophische Kernbegriffe (Systematik & Schutz vor Alltagsfehldeutung) ---
        'Mängelwesen': {
            type: '3. Philosophischer Kernbegriff',
            def: 'Keine pessimistische Klage über menschliche Schwäche, sondern die anthropologische Grundbestimmung.',
            context: 'Die biologische Mangelhaftigkeit zwingt den Menschen überhaupt erst dazu, aktiv zu werden und Kultur zu schaffen.'
        },
        'Handeln': {
            type: '3. Philosophischer Kernbegriff',
            def: 'Philosophisch mehr als bloße Beschäftigung. Handeln meint die zielgerichtete, planvolle und vorausschauende Bearbeitung der Natur durch Verstand und Werkzeuge.',
            context: 'Handeln ist Gehlens Antwort auf das Mängelwesen: Der Mensch überlebt nur, indem er die vorfindliche Natur aktiv ins Lebensdienliche umgestaltet.'
        },
        '„Zweite Natur“ (Kultur)': {
            type: '3. Philosophischer Kernbegriff',
            def: 'Kultur meint bei Gehlen nicht nur Kunst, Literatur oder Theater, sondern die Gesamtheit aller lebensnotwendigen künstlichen Ersatzwelten (Kleidung, Häuser, Waffen, Straßen, Sprache), ohne die der Mensch sofort stürbe.',
            context: 'In der rohen Natur kann der Mensch nicht existieren. Erst die geschaffene Kulturwelt wird ihm zur unverzichtbaren zweiten Heimat.'
        },
        'Entlastungsprinzip': {
            type: '3. Philosophischer Kernbegriff',
            def: 'Die zentrale Funktion von Regeln und Institutionen. Sie entbinden den Menschen von der ständigen Überforderung, in jeder Sekunde neu entscheiden, abwägen und auf Reize reagieren zu müssen, indem sie verlässliche Handlungsroutinen schaffen.',
            context: 'Weil Alltagsentscheidungen routiniert und wie von selbst ablaufen, wird geistige Energie für Wissenschaft, Reflexion und höhere Kulturleistungen frei.'
        },
        'Selbstmacht (der Institutionen)': {
            type: '3. Philosophischer Kernbegriff',
            def: 'Institutionen (Recht, Ehe, Staat) entwickeln eine überindividuelle Eigendynamik und Autorität, die das Verhalten des Einzelnen auch gegen spontane Triebe lenkt und stabilisiert.',
            context: 'Sie schützen das Zusammenleben vor Willkür und bewahren die menschliche Zivilisation vor dem Rückfall in das Chaos.'
        },

        // --- 4. Hintergrundwissen & Philosophischer Kontext (Ideengeschichte) ---
        'Johann Gottfried Herder („Mängelwesen“)': {
            type: '4. Hintergrundwissen & Philosophiegeschichte',
            def: 'Deutscher Philosoph der Aufklärung (1744–1803). Stellte 1772 in seiner Abhandlung über den Ursprung der Sprache fest, dass der Mensch das elendeste aller Wesen wäre, wenn er seine Schwäche nicht durch Vernunft und Sprache kompensieren würde.',
            context: 'Gehlen knüpft explizit an Herders biologischen Begriff des Mängelwesens an und baut darauf seine moderne anthropologische Handlungstheorie auf.'
        },
        '„Entgiftete Natur“': {
            type: '4. Hintergrundwissen & Philosophiegeschichte',
            def: 'Gehlens Metapher für die durch menschliche Technik gezähmte Umwelt.',
            context: 'Die Natur im Rohzustand ist für den ungeschützten Menschen lebensfeindlich („giftig“); erst Werkzeuge, Feuer und Behausungen machen sie für ihn bewohnbar.'
        },
        'Scharnier zu Institutionen (Recht, Eigentum, Familie)': {
            type: '4. Hintergrundwissen & Philosophiegeschichte',
            def: 'Kontrastfolie zu Jean-Jacques Rousseau.',
            context: 'Während Rousseau Eigentum und Vergesellschaftung als Ursache für Ungleichheit und Entfremdung brandmarkt, sieht Gehlen in ihnen unersetzliche Schutzmauern gegen Chaos und Verrohung.'
        }
    };

    // =========================================================================
    // 2. VOKABEL-KLICK-LOGIK (STICKY GLOSSAR CARD)
    // =========================================================================
    const vocabPlaceholder = document.getElementById('vocab-placeholder');
    const vocabContent = document.getElementById('vocab-content');
    const vocabTitle = document.getElementById('vocab-title');
    const vocabType = document.getElementById('vocab-type');
    const vocabDefinition = document.getElementById('vocab-definition');
    const vocabContext = document.getElementById('vocab-context');
    const vocabCard = document.getElementById('vocab-card');

    function showVocabulary(wordKey) {
        const entry = vocabDatabase[wordKey];
        if (!entry) return;

        // Reset previous active states
        document.querySelectorAll('.vocab.solution-visible.active, .cat-word-pill.active').forEach(el => {
            el.classList.remove('active');
        });

        // Highlight matching elements
        document.querySelectorAll(`.vocab.solution-visible[data-word="${wordKey}"], .cat-word-pill[data-word="${wordKey}"]`).forEach(el => {
            el.classList.add('active');
        });

        // Populate card
        vocabPlaceholder.classList.add('hidden');
        vocabContent.classList.remove('hidden');

        vocabTitle.textContent = wordKey;
        vocabType.textContent = entry.type;
        vocabDefinition.textContent = entry.def;
        vocabContext.textContent = entry.context;

        // Visual flash animation
        if (vocabCard) {
            vocabCard.classList.remove('animate-fade-in');
            void vocabCard.offsetWidth;
            vocabCard.classList.add('animate-fade-in');
        }

        // On small mobile screens, ensure the card is in view
        if (window.innerWidth < 768 && vocabCard) {
            const rect = vocabCard.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > window.innerHeight) {
                vocabCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    // Attach click listener to text annotations and category pills
    document.querySelectorAll('.vocab.solution-visible, .cat-word-pill').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.stopPropagation();
            const wordKey = elem.getAttribute('data-word');
            showVocabulary(wordKey);
        });
    });

    // =========================================================================
    // 3. TAB NAVIGATION (NUR 2 TABS: TEXT & AUFGABE 2)
    // =========================================================================
    const chapTabBtns = document.querySelectorAll('.chap-tab-btn');
    const chapPanels = document.querySelectorAll('.chap-panel');

    function switchTab(chapKey) {
        chapTabBtns.forEach(btn => {
            if (btn.getAttribute('data-chap-tab') === chapKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        chapPanels.forEach(panel => {
            if (panel.id === `chap-panel-${chapKey}`) {
                panel.classList.remove('hidden');
                panel.classList.add('animate-fade-in');
            } else {
                panel.classList.add('hidden');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    chapTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const chapKey = btn.getAttribute('data-chap-tab');
            switchTab(chapKey);
        });
    });

    document.querySelectorAll('.next-step-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetStep = btn.getAttribute('data-goto-step');
            switchTab(targetStep);
        });
    });

    // =========================================================================
    // 4. INTERAKTIVE KAUSALKETTE (TAB 2, AUFGABE 2)
    // =========================================================================
    const chainNodes = document.querySelectorAll('.chain-node');
    const chainExplTitle = document.getElementById('chain-expl-title');
    const chainExplText = document.getElementById('chain-expl-text');
    const chainArrowExpl = document.getElementById('chain-arrow-expl');

    const chainData = {
        '1': {
            title: '1. Der Ausgangspunkt: Das biologische Mängelwesen',
            text: 'Der Mensch ist körperlich unvollkommen und unfertig: Ihm fehlen natürliche Schutzwaffen (wie Reißzähne oder Krallen), Fell gegen Witterung und schnelle Fluchtorgane. Biologisch betrachtet ist er organisch unspezialisiert und von Natur aus mittellos.',
            arrow: '<strong>Pfeil-Begründung (Warum folgt daraus Weltoffenheit?):</strong> Weil dem Menschen angeborene tierische Instinkte fehlen, ist er nicht an eine bestimmte biologische Nische gebunden, sondern prinzipiell weltoffen.'
        },
        '2': {
            title: '2. Die Folge: Weltoffenheit & Reizüberflutung',
            text: 'Da der Mensch keine fest umgrenzte Umwelt besitzt, stürmen alle Außenreize ungefiltert auf ihn ein. Diese „Weltoffenheit“ bedeutet zunächst permanente existenzielle Unsicherheit, Überforderung und Handlungsdruck.',
            arrow: '<strong>Pfeil-Begründung (Warum folgt daraus Handeln?):</strong> Würde sich der Mensch rein passiv verhalten, würde er an der Reizflut und Kälte zugrunde gehen. Seine biologische Mittellosigkeit zwingt ihn zur aktiven Tatkraft.'
        },
        '3': {
            title: '3. Die Notwendigkeit: Der Mensch als handelndes Wesen',
            text: 'Handeln bedeutet, die vorfindliche Natur nicht einfach hinzunehmen, sondern sie vorausschauend, planvoll und tätlich umzugestalten und sich dienstbar zu machen (durch aufrechten Gang, freie Hände und Intelligenz).',
            arrow: '<strong>Pfeil-Begründung (Warum folgt daraus Kultur?):</strong> Die Gesamtheit der durch planvolles Handeln geschaffenen und lebensdienlich umgearbeiteten Kunstwelt nennen wir Kultur.'
        },
        '4': {
            title: '4. Die Kompensation: Kultur als lebensnotwendige „zweite Natur“',
            text: 'Werkzeuge, Waffen, Kleidung, Behausungen, Vorräte und Sprache sind kein nebensächlicher Luxus, sondern die biologische Existenzbedingung des Mängelwesens. Sie fungieren als lebensnotwendige Prothese für fehlende Organe.',
            arrow: '<strong>Pfeil-Begründung (Warum folgt daraus die Notwendigkeit von Institutionen?):</strong> Technische Sachkultur allein genügt nicht, um das menschliche Zusammenleben dauerhaft zu sichern. Der instinktunsichere Mensch braucht stabile soziale Ordnungsformen.'
        },
        '5': {
            title: '5. Die Vollendung: Institutionen nach dem Entlastungsprinzip',
            text: 'Gesellschaftliche Institutionen (Recht, Ehe, Eigentum, Staat) sind überindividuelle Dauerformen. Sie entlasten das Individuum von ständiger Entscheidungsnot, bannen den Rückfall in Triebchaos und machen geistige Energien für höhere Kultur frei.',
            arrow: '<strong>Ergebnis der Kausalkette:</strong> Erst die institutionelle Entlastung vollendet die biologische Überlebensfähigkeit des Mängelwesens Mensch.'
        }
    };

    chainNodes.forEach(node => {
        node.addEventListener('click', () => {
            chainNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const nodeNum = node.getAttribute('data-node');
            const data = chainData[nodeNum];
            if (data && chainExplTitle && chainExplText && chainArrowExpl) {
                chainExplTitle.textContent = data.title;
                chainExplText.textContent = data.text;
                chainArrowExpl.innerHTML = data.arrow;
                document.getElementById('chain-explanation-card').classList.add('animate-fade-in');
            }
        });
    });

    // =========================================================================
    // 5. MUSTERLÖSUNG ZUM ENTLASTUNGSPRINZIP (AUFGABE 2)
    // =========================================================================
    const btnToggleSolution = document.getElementById('btn-toggle-solution');
    const boxSolutionSample = document.getElementById('box-solution-sample');

    if (btnToggleSolution && boxSolutionSample) {
        btnToggleSolution.addEventListener('click', () => {
            const isHidden = boxSolutionSample.classList.contains('hidden');
            boxSolutionSample.classList.toggle('hidden', !isHidden);
            btnToggleSolution.classList.toggle('active', isHidden);
        });
    }

    // =========================================================================
    // 6. ACCESSIBILITY & DESIGN (A+/A- & DARK MODE)
    // =========================================================================
    const btnTextDecrease = document.getElementById('btn-text-decrease');
    const btnTextIncrease = document.getElementById('btn-text-increase');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const themeText = document.getElementById('theme-text');

    let currentScale = 1.0;

    if (btnTextDecrease && btnTextIncrease) {
        btnTextDecrease.addEventListener('click', () => {
            if (currentScale > 0.85) {
                currentScale -= 0.05;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });

        btnTextIncrease.addEventListener('click', () => {
            if (currentScale < 1.35) {
                currentScale += 0.05;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });
    }

    if (btnThemeToggle && themeText) {
        const savedTheme = localStorage.getItem('gehlen_theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeText.textContent = 'Hellmodus';
        }

        btnThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeText.textContent = isDark ? 'Hellmodus' : 'Dunkelmodus';
            localStorage.setItem('gehlen_theme', isDark ? 'dark' : 'light');
        });
    }

});
