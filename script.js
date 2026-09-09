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
    // 4. INTERAKTIVER BEZIEHUNGS- & VERBEN-FINDER (TAB 2, AUFGABE 2)
    // =========================================================================
    const termNames = {
        'maengelwesen': 'Mängelwesen',
        'weltoffenheit': 'Weltoffenheit',
        'handeln': 'Handeln',
        'kultur': 'Kultur',
        'institutionen': 'Institutionen'
    };

    const relationMatrix = {
        'maengelwesen->weltoffenheit': {
            verb: 'bedingt / führt zu',
            exp: 'Weil dem Menschen biologisch feste Instinkte fehlen, ist er nicht an eine geschlossene Nische („Umwelt“) angepasst, sondern prinzipiell weltoffen und schutzlos einer Reizüberflutung ausgesetzt.',
            sentence: '„Die organische Instinktarmut des Mängelwesens führt dazu, dass der Mensch prinzipiell weltoffen und reizüberflutet ist.“'
        },
        'maengelwesen->handeln': {
            verb: 'zwingt zu / wird kompensiert durch',
            exp: 'Seine morphologische Mittellosigkeit (kein Fell, keine Waffen) lässt dem Menschen keine Wahl: Er ist biologisch zur tätigen Naturbeherrschung gezwungen, um nicht unterzugehen.',
            sentence: '„Seine biologischen Defizite zwingen das Mängelwesen zur vorausschauenden Naturbeherrschung durch planvolles Handeln.“'
        },
        'maengelwesen->kultur': {
            verb: 'erfordert als Ersatzwelt',
            exp: 'In der rohen Natur kann der Mensch nicht überleben. Die Kultur bildet seine lebensnotwendige „zweite Natur“, die an die Stelle fehlender biologischer Anpassung tritt.',
            sentence: '„Das Mängelwesen benötigt Kultur als künstliche Ersatzwelt, um seine physische Unterlegenheit auszugleichen.“'
        },
        'maengelwesen->institutionen': {
            verb: 'benötigt zur Stabilisierung',
            exp: 'Weil der Mensch keine angeborenen Steuerungsmechanismen besitzt, droht ihm ohne übergeordnete soziale Ordnungen ständige Orientierungslosigkeit und Verrohung.',
            sentence: '„Das instinktunsichere Mängelwesen ist auf Institutionen angewiesen, um sein Verhalten dauerhaft zu ordnen.“'
        },
        'weltoffenheit->handeln': {
            verb: 'erzwingt / fordert heraus',
            exp: 'Die ungefilterte Flut von Außenreizen überfordert den Menschen, wenn er sie nicht aktiv durch planvolles Handeln und Werkzeuge bewältigt.',
            sentence: '„Die bedrohliche Reizüberflutung der Weltoffenheit erzwingt vorausschauendes Handeln zur Lebensbewältigung.“'
        },
        'weltoffenheit->kultur': {
            verb: 'wird gebändigt durch / ermöglicht',
            exp: 'Die Weltoffenheit erlaubt dem Menschen die Besiedelung aller Klimazonen, setzt aber voraus, dass er überall eine schützende Kulturwelt errichtet.',
            sentence: '„Die Weltoffenheit ermöglicht und verlangt die planvolle Erschaffung einer kultivierten Überlebenswelt.“'
        },
        'weltoffenheit->institutionen': {
            verb: 'wird kanalisiert durch',
            exp: 'Da der weltoffene Mensch nicht automatisch weiß, wie er reagieren soll, kanalisieren Institutionen das Verhalten in verbindliche Gewohnheiten.',
            sentence: '„Institutionen kanalisieren die orientierungslose Weltoffenheit in verlässliche, normierte Handlungsbahnen.“'
        },
        'handeln->kultur': {
            verb: 'schafft / erzeugt',
            exp: 'Durch Verstand und Handeinsatz arbeitet der Mensch die Natur planvoll ins Lebensdienliche um: Der Inbegriff dieser umgearbeiteten Natur heißt Kultur („zweite Natur“).',
            sentence: '„Durch planvolles Handeln formt der Mensch die lebensfeindliche Roh-Natur um und schafft sich die Kultur als zweite Natur.“'
        },
        'handeln->maengelwesen': {
            verb: 'kompensiert / gleicht aus',
            exp: 'Mit Werkzeugen, aufrechtem Gang und Vernunft gleicht das Handeln die fehlenden Klauen, Zähne und Schutzfelle des Mängelwesens vollständig aus.',
            sentence: '„Tätiges Handeln kompensiert die morphologische Mittellosigkeit des biologischen Mängelwesens.“'
        },
        'handeln->institutionen': {
            verb: 'organisiert sich in',
            exp: 'Menschliches Handeln kann dauerhaft nur gelingen, wenn Arbeitsteilung, Gesetze und Verträge in stabilen Institutionen geregelt werden.',
            sentence: '„Das gemeinschaftliche Handeln des Menschen organisiert und verstetigt sich in dauerhaften Institutionen.“'
        },
        'kultur->institutionen': {
            verb: 'benötigt / wird geschützt durch',
            exp: 'Werkzeuge und Sachkultur genügen allein nicht für das soziale Zusammenleben; Kultur benötigt überindividuelle Institutionen (Recht, Ehe, Staat), um vor Verfall geschützt zu werden.',
            sentence: '„Die materielle Kultur wird durch überindividuelle Institutionen vor Verfall und Selbstzerstörung geschützt.“'
        },
        'kultur->maengelwesen': {
            verb: 'sichert Überleben von',
            exp: 'Die künstliche Kulturwelt (Waffen, Kleidung, Hütten, Medizin) bildet die Schutzhülle, in der das organisch wehrlose Wesen Mensch existieren kann.',
            sentence: '„Kultur fungiert als künstliche Ersatzwelt, die dem Mängelwesen das physische Überleben überhaupt erst garantiert.“'
        },
        'institutionen->maengelwesen': {
            verb: 'entlasten von Entscheidungsnot',
            exp: 'Das zentrale Entlastungsprinzip: Institutionen nehmen dem instinktarmen Menschen den Zwang ab, jede Alltagshandlung neu zu entscheiden, und zähmen rohe Triebe („wie von selbst“).',
            sentence: '„Institutionen entlasten das Mängelwesen von permanenter Reizüberflutung, ständiger Entscheidungsnot und Triebchaos.“'
        },
        'institutionen->handeln': {
            verb: 'routinieren / regeln',
            exp: 'Institutionen verwandeln unsicheres, zögerndes Handeln in feste soziale Routinen und setzen geistige Energien für höhere Reflexion frei.',
            sentence: '„Institutionen routinieren das menschliche Handeln und lenken es verbindlich in geordnete Bahnen.“'
        },
        'institutionen->kultur': {
            verb: 'bewahren vor Verfall &amp; Chaos',
            exp: 'Wenn Institutionen wie Recht oder Familie zerstört werden, primitivisiert der Mensch sehr schnell und die Kultur bricht zusammen.',
            sentence: '„Institutionen bewahren die Kultur vor dem Verfall, indem sie das soziale Verhalten stabilisieren und formen.“'
        }
    };

    const relFromSelect = document.getElementById('rel-from-select');
    const relToSelect = document.getElementById('rel-to-select');
    const relVerbBadge = document.getElementById('relVerbBadge');
    const relPairLabel = document.getElementById('relPairLabel');
    const relExplanation = document.getElementById('relExplanation');
    const relSentence = document.getElementById('relSentence');
    const conceptCards = document.querySelectorAll('.concept-card');

    function updateRelationFinder() {
        if (!relFromSelect || !relToSelect || !relVerbBadge) return;

        const fromKey = relFromSelect.value;
        const toKey = relToSelect.value;
        const pairKey = `${fromKey}->${toKey}`;

        const fromName = termNames[fromKey] || fromKey;
        const toName = termNames[toKey] || toKey;

        relPairLabel.textContent = `${fromName} → ${toName}`;

        if (fromKey === toKey) {
            relVerbBadge.textContent = 'identischer Begriff';
            relExplanation.innerHTML = `Ihr habt zweimal <strong>${fromName}</strong> ausgewählt. Wählt zwei unterschiedliche Begriffe aus, um die Verknüpfung und Pfeilbeschriftung für euer Schaubild anzuzeigen.`;
            relSentence.innerHTML = `<em>Tipp: Untersucht z.&thinsp;B., wie ${fromName} mit Handeln oder Institutionen zusammenhängt.</em>`;
            return;
        }

        const relation = relationMatrix[pairKey];
        if (relation) {
            relVerbBadge.textContent = relation.verb;
            relExplanation.innerHTML = relation.exp;
            relSentence.innerHTML = `<em>${relation.sentence}</em>`;
        } else {
            // Check reverse pair for hints
            const reverseKey = `${toKey}->${fromKey}`;
            const reverseRelation = relationMatrix[reverseKey];
            if (reverseRelation) {
                relVerbBadge.textContent = `wird beeinflusst von (← ${reverseRelation.verb})`;
                relExplanation.innerHTML = `In Gehlens Systematik verläuft der Hauptzusammenhang typischerweise umgekehrt: Von <strong>${toName}</strong> zu <strong>${fromName}</strong> (${reverseRelation.verb}).`;
                relSentence.innerHTML = `<em>Ihr könnt auf dem Arbeitsblatt einen Pfeil von ${toName} nach ${fromName} zeichnen oder notieren: „${fromName} steht in Wechselwirkung mit ${toName}.“</em>`;
            } else {
                relVerbBadge.textContent = 'Wechselwirkung / Bedingungsgefüge';
                relExplanation.innerHTML = `Zwischen <strong>${fromName}</strong> und <strong>${toName}</strong> besteht ein indirektes Verhältnis in Gehlens Gesamttheorie.`;
                relSentence.innerHTML = `<em>„${fromName} und ${toName} bilden zusammenhängende Elemente in Gehlens anthropologischem Kulturmodell.“</em>`;
            }
        }
    }

    if (relFromSelect && relToSelect) {
        relFromSelect.addEventListener('change', updateRelationFinder);
        relToSelect.addEventListener('change', updateRelationFinder);
    }

    // Initiale Beziehungsanzeige beim Laden ausführen
    updateRelationFinder();

    // =========================================================================
    // 5b. STECKBRIEF-MODAL (ARNOLD GEHLEN)
    // =========================================================================
    const btnBioModal = document.getElementById('btn-bio-modal');
    const bioModal = document.getElementById('bioModal');
    const btnCloseBioModal = document.getElementById('btnCloseBioModal');

    if (btnBioModal && bioModal) {
        btnBioModal.addEventListener('click', () => {
            bioModal.classList.remove('hidden');
        });
    }

    if (btnCloseBioModal && bioModal) {
        btnCloseBioModal.addEventListener('click', () => {
            bioModal.classList.add('hidden');
        });
    }

    if (bioModal) {
        bioModal.addEventListener('click', (e) => {
            if (e.target === bioModal) {
                bioModal.classList.add('hidden');
            }
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
