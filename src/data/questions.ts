import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "1",
    text: "Quali sono i tre requisiti fondamentali dell'imprenditore secondo l'art. 2082 del codice civile?",
    options: [
      "Professionalità, scopo di lucro, sede legale",
      "Professionalità, organizzazione, fine della produzione/scambio",
      "Organizzazione, capitale sociale, dipendenti",
      "Scopo di lucro, dipendenti, sede legale",
    ],
    correctAnswer:
      "Professionalità, organizzazione, fine della produzione/scambio",
    explanation:
      "L'art. 2082 c.c. richiede tre elementi essenziali: professionalità (esercizio abituale), organizzazione dei fattori produttivi, e fine della produzione o scambio di beni e servizi.",
    difficulty: "facile",
    topicId: "imprenditore",
  },
  {
    id: "2",
    text: "Cosa si intende per 'fine mutualistico' nelle cooperative?",
    options: [
      "Massimizzare il profitto per i soci",
      "Fornire vantaggi ai soci come prezzi più bassi o migliori condizioni",
      "Evitare il pagamento delle tasse",
      "Ottenere finanziamenti pubblici",
    ],
    correctAnswer:
      "Fornire vantaggi ai soci come prezzi più bassi o migliori condizioni",
    explanation:
      "Il fine mutualistico delle cooperative consiste nel fornire vantaggi diretti ai soci (come prezzi più vantaggiosi o migliori condizioni di lavoro) invece di perseguire la massimizzazione del profitto.",
    difficulty: "medio",
    topicId: "imprenditore",
  },
  {
    id: "3",
    text: "In una società occulta con socio occulto, cosa succede in caso di fallimento?",
    options: [
      "Fallisce solo il socio palese",
      "Fallisce solo la società",
      "Falliscono sia la società occulta che tutti i soci",
      "Non può essere dichiarato il fallimento",
    ],
    correctAnswer: "Falliscono sia la società occulta che tutti i soci",
    explanation:
      "In caso di scoperta di una società occulta, il fallimento viene dichiarato sia per la società stessa che per tutti i soci, compresi quelli occulti.",
    difficulty: "difficile",
    topicId: "imprenditore",
  },
  {
    id: "4",
    text: "Cosa distingue un'attività economica d'impresa da una professione intellettuale?",
    options: [
      "La presenza di dipendenti",
      "L'iscrizione al registro delle imprese",
      "La regolamentazione dell'accesso tramite albo e requisiti specifici",
      "Il fatturato annuale",
    ],
    correctAnswer:
      "La regolamentazione dell'accesso tramite albo e requisiti specifici",
    explanation:
      "Le professioni intellettuali si distinguono per l'accesso regolamentato che richiede specifici requisiti formativi, abilitazione e iscrizione all'albo, mentre l'accesso all'attività d'impresa è generalmente libero.",
    difficulty: "medio",
    topicId: "imprenditore",
  },
  {
    id: "5",
    text: "Come viene trattata un'impresa illecita in caso di insolvenza?",
    options: [
      "Non può essere soggetta a procedure concorsuali",
      "È soggetta solo a sanzioni penali",
      "È soggetta a liquidazione giudiziale come le imprese lecite",
      "Viene automaticamente cancellata dal registro delle imprese",
    ],
    correctAnswer:
      "È soggetta a liquidazione giudiziale come le imprese lecite",
    explanation:
      "L'impresa illecita, in caso di insolvenza, è soggetta alla procedura di liquidazione giudiziale come le imprese lecite, per garantire la tutela dei creditori.",
    difficulty: "medio",
    topicId: "imprenditore",
  },
  {
    id: "6",
    text: "Quale è la caratteristica principale dell'imprenditore occulto rispetto all'imprenditore diretto (prestanome)?",
    options: [
      "Ha più dipendenti",
      "È iscritto al registro delle imprese",
      "Fornisce i mezzi e prende le decisioni effettive",
      "Ha un fatturato maggiore",
    ],
    correctAnswer: "Fornisce i mezzi e prende le decisioni effettive",
    explanation:
      "L'imprenditore occulto è colui che, pur rimanendo nascosto, fornisce i mezzi necessari all'impresa, prende le decisioni strategiche e si appropria dei risultati economici.",
    difficulty: "medio",
    topicId: "imprenditore",
  },
  {
    id: "7",
    text: "Cosa si intende per 'attività economica' nel contesto dell'impresa?",
    options: [
      "Un'attività che genera sempre profitto",
      "Un'attività che copre i costi con i ricavi",
      "Un'attività con almeno 10 dipendenti",
      "Un'attività con sede fissa",
    ],
    correctAnswer: "Un'attività che copre i costi con i ricavi",
    explanation:
      "L'attività economica è tale quando è idonea a coprire i costi con i ricavi, indipendentemente dalla presenza di uno scopo di lucro.",
    difficulty: "facile",
    topicId: "imprenditore",
  },
  {
    id: "8",
    text: "In cosa consiste la 'professionalità' richiesta per essere imprenditore?",
    options: [
      "Avere una laurea",
      "Essere iscritti a un albo",
      "Esercitare l'attività in modo abituale e non occasionale",
      "Avere un certo numero di anni di esperienza",
    ],
    correctAnswer: "Esercitare l'attività in modo abituale e non occasionale",
    explanation:
      "La professionalità richiesta dall'art. 2082 c.c. consiste nell'esercizio abituale e non occasionale dell'attività d'impresa.",
    difficulty: "facile",
    topicId: "imprenditore",
  },
  {
    id: "9",
    text: "Quale differenza esiste tra il socio occulto di società palese e la società occulta?",
    options: [
      "Non c'è alcuna differenza",
      "Nel primo caso solo un socio è nascosto ma la società è nota, nel secondo è nascosta l'intera società",
      "Nel primo caso l'attività è lecita, nel secondo è illecita",
      "Nel primo caso non ci sono responsabilità, nel secondo sì",
    ],
    correctAnswer:
      "Nel primo caso solo un socio è nascosto ma la società è nota, nel secondo è nascosta l'intera società",
    explanation:
      "Nel caso del socio occulto di società palese, la società esiste ufficialmente ma uno o più soci sono nascosti; nella società occulta, invece, è l'intera esistenza della società ad essere celata.",
    difficulty: "difficile",
    topicId: "imprenditore",
  },
  {
    id: "10",
    text: "Perché le cooperative sono considerate imprese nonostante non abbiano scopo di lucro?",
    options: [
      "Perché hanno molti dipendenti",
      "Perché svolgono un'attività economica con copertura dei costi, anche se con fine mutualistico",
      "Perché sono iscritte al registro delle imprese",
      "Perché hanno un capitale sociale minimo",
    ],
    correctAnswer:
      "Perché svolgono un'attività economica con copertura dei costi, anche se con fine mutualistico",
    explanation:
      "Le cooperative sono considerate imprese perché svolgono un'attività economica che copre i costi con i ricavi, anche se il loro scopo non è il lucro ma il vantaggio mutualistico per i soci.",
    difficulty: "medio",
    topicId: "imprenditore",
  },
  {
    id: "11",
    text: "Cosa succede ai creditori in caso di scoperta di un imprenditore occulto?",
    options: [
      "Possono rivalersi solo sul prestanome",
      "Non hanno diritti verso l'imprenditore occulto",
      "Possono rivalersi sia sul prestanome che sull'imprenditore occulto",
      "Perdono ogni diritto di credito",
    ],
    correctAnswer:
      "Possono rivalersi sia sul prestanome che sull'imprenditore occulto",
    explanation:
      "In caso di scoperta dell'imprenditore occulto, i creditori possono rivalersi sia sul patrimonio del prestanome che su quello dell'imprenditore occulto, che risponde solidalmente delle obbligazioni.",
    difficulty: "difficile",
    topicId: "imprenditore",
  },
  {
    id: "12",
    text: "Quali sono le principali categorie di imprenditore per tipologia?",
    options: [
      "Imprenditore commerciale e imprenditore agricolo",
      "Imprenditore pubblico e imprenditore privato",
      "Imprenditore individuale e imprenditore collettivo",
      "Imprenditore artigiano e imprenditore commerciante",
    ],
    correctAnswer: "Imprenditore commerciale e imprenditore agricolo",
    explanation:
      "Le principali categorie per tipologia sono l'imprenditore commerciale (art. 2195) e l'imprenditore agricolo (art. 2135)",
    difficulty: "facile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "13",
    text: "Quali sono le attività che caratterizzano l'imprenditore commerciale secondo l'art. 2195?",
    options: [
      "Attività industriale, intermediazione, trasporti, attività bancaria/assicurativa e attività ausiliarie",
      "Coltivazione, allevamento, selvicoltura e attività connesse",
      "Solo attività di produzione e vendita di beni",
      "Solo attività di prestazione di servizi",
    ],
    correctAnswer:
      "Attività industriale, intermediazione, trasporti, attività bancaria/assicurativa e attività ausiliarie",
    explanation:
      "L'art. 2195 elenca specificamente queste cinque categorie di attività che caratterizzano l'imprenditore commerciale",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "14",
    text: "Quali sono le attività tipiche dell'imprenditore agricolo?",
    options: [
      "Coltivazione del fondo, selvicoltura, allevamento e attività connesse",
      "Produzione industriale, commercio e servizi",
      "Solo coltivazione e allevamento",
      "Qualsiasi attività svolta in campagna",
    ],
    correctAnswer:
      "Coltivazione del fondo, selvicoltura, allevamento e attività connesse",
    explanation:
      "L'art. 2135 definisce come attività agricole la coltivazione del fondo, la selvicoltura, l'allevamento di animali e le attività connesse",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "15",
    text: "Cosa si intende per 'attività connesse' nell'impresa agricola?",
    options: [
      "Qualsiasi attività svolta in campagna",
      "Attività di trasformazione e commercializzazione dei propri prodotti agricoli, con connessione soggettiva e oggettiva",
      "Solo la vendita dei prodotti agricoli",
      "Attività di trasporto dei prodotti agricoli",
    ],
    correctAnswer:
      "Attività di trasformazione e commercializzazione dei propri prodotti agricoli, con connessione soggettiva e oggettiva",
    explanation:
      "Le attività connesse richiedono due requisiti: connessione soggettiva (stesso imprenditore) e oggettiva (uso prevalente dei propri prodotti)",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "16",
    text: "Qual è la differenza tra privatizzazione formale e sostanziale?",
    options: [
      "Non c'è differenza",
      "La formale riguarda il cambio di forma giuridica, la sostanziale il passaggio di proprietà ai privati",
      "La formale è temporanea, la sostanziale è permanente",
      "La formale è più costosa della sostanziale",
    ],
    correctAnswer:
      "La formale riguarda il cambio di forma giuridica, la sostanziale il passaggio di proprietà ai privati",
    explanation:
      "La privatizzazione formale comporta la trasformazione in SpA restando pubblica, quella sostanziale il vero passaggio ai privati",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "17",
    text: "Quali requisiti deve avere un'impresa sociale?",
    options: [
      "Solo lo scopo di lucro",
      "Stabilità, principalità (70% ricavi da attività sociale), gestione trasparente e coinvolgimento stakeholder",
      "Solo dipendenti svantaggiati",
      "Solo la forma di SpA",
    ],
    correctAnswer:
      "Stabilità, principalità (70% ricavi da attività sociale), gestione trasparente e coinvolgimento stakeholder",
    explanation:
      "L'impresa sociale deve rispettare quattro requisiti fondamentali per essere considerata tale",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "18",
    text: "Chi può essere imprenditore artigiano?",
    options: [
      "Chiunque abbia un negozio",
      "Chi esercita personalmente, professionalmente e come titolare l'attività, assumendone la responsabilità",
      "Solo le società per azioni",
      "Solo chi ha dipendenti",
    ],
    correctAnswer:
      "Chi esercita personalmente, professionalmente e come titolare l'attività, assumendone la responsabilità",
    explanation:
      "L'imprenditore artigiano deve essere personalmente coinvolto nell'attività e assumerne la piena responsabilità",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "19",
    text: "L'imprenditore agricolo può svolgere attività di trasformazione dei suoi prodotti?",
    options: [
      "No, mai",
      "Sì, se sono attività connesse che utilizzano prevalentemente i propri prodotti",
      "Solo se diventa anche imprenditore commerciale",
      "Solo se ha una licenza speciale",
    ],
    correctAnswer:
      "Sì, se sono attività connesse che utilizzano prevalentemente i propri prodotti",
    explanation:
      "Le attività di trasformazione sono ammesse come attività connesse se utilizzano prevalentemente i prodotti dell'imprenditore agricolo",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "20",
    text: "Quali forme giuridiche può assumere l'impresa artigiana?",
    options: [
      "Qualsiasi forma societaria",
      "Solo ditta individuale",
      "Può assumere forma di società, escluse SpA e SapA",
      "Solo società di persone",
    ],
    correctAnswer: "Può assumere forma di società, escluse SpA e SapA",
    explanation:
      "L'impresa artigiana può essere costituita in forma societaria, ma non può essere SpA o SapA",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "21",
    text: "Chi è escluso dalla possibilità di costituire un'impresa sociale?",
    options: [
      "Le cooperative",
      "Persone fisiche, enti pubblici e società unipersonali",
      "Le associazioni",
      "Persone fisiche e enti pubblici",
    ],
    correctAnswer: "Persone fisiche, enti pubblici e società unipersonali",
    explanation:
      "La legge esclude espressamente tre categorie dalla possibilità di costituire un'impresa sociale: le persone fisiche singole, gli enti pubblici e le società unipersonali. Questa esclusione mira a garantire la natura collettiva e privata dell'iniziativa sociale",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "22",
    text: "Chi è considerato piccolo imprenditore secondo il codice civile?",
    options: [
      "Chiunque abbia meno di 10 dipendenti",
      "Coltivatori diretti, artigiani, piccoli commercianti e chi esercita un'attività professionale organizzata prevalentemente con il lavoro proprio e dei familiari",
      "Solo gli artigiani",
      "Chi ha un fatturato inferiore a 100.000 euro",
    ],
    correctAnswer:
      "Coltivatori diretti, artigiani, piccoli commercianti e chi esercita un'attività professionale organizzata prevalentemente con il lavoro proprio e dei familiari",
    explanation:
      "Il codice civile identifica come piccolo imprenditore chi organizza la propria attività prevalentemente con il lavoro proprio e dei familiari, includendo specificamente coltivatori diretti, artigiani e piccoli commercianti",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "23",
    text: "Quali sono i requisiti dimensionali per non essere soggetti a liquidazione giudiziale secondo il Codice della Crisi?",
    options: [
      "Nessun requisito specifico",
      "Attivo patrimoniale non superiore a 300.000€, ricavi non superiori a 200.000€ e debiti non superiori a 500.000€ nei tre esercizi precedenti",
      "Attivo patrimoniale non superiore a 500.000€, ricavi non superiori a 300.000€ e debiti non superiori a 200.000€ nei tre esercizi precedenti",
      "Solo il numero di dipendenti inferiore a 15",
    ],
    correctAnswer:
      "Attivo patrimoniale non superiore a 300.000€, ricavi non superiori a 200.000€ e debiti non superiori a 500.000€ nei tre esercizi precedenti",
    explanation:
      "Il Codice della Crisi stabilisce tre parametri dimensionali che devono essere tutti rispettati nei tre esercizi precedenti per non essere soggetti a liquidazione giudiziale",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "24",
    text: "Quale procedura si applica al piccolo imprenditore in caso di crisi?",
    options: [
      "Liquidazione giudiziale",
      "Liquidazione controllata",
      "Nessuna procedura",
      "Solo il fallimento ordinario",
    ],
    correctAnswer: "Liquidazione controllata",
    explanation:
      "I piccoli imprenditori che soddisfano i requisiti dimensionali sono sottoposti alla procedura di liquidazione controllata invece che alla liquidazione giudiziale",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "25",
    text: "Quali obblighi di tenuta delle scritture contabili ha il piccolo imprenditore?",
    options: [
      "Gli stessi dell'imprenditore commerciale",
      "Nessun obbligo specifico di tenuta delle scritture contabili",
      "Solo il libro giornale",
      "Solo il registro IVA",
    ],
    correctAnswer:
      "Nessun obbligo specifico di tenuta delle scritture contabili",
    explanation:
      "Il piccolo imprenditore è esonerato dagli obblighi di tenuta delle scritture contabili previsti per l'imprenditore commerciale non piccolo",
    difficulty: "facile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "26",
    text: "Cosa si intende per privatizzazione formale di un'impresa pubblica?",
    options: [
      "La vendita dell'impresa ai privati",
      "L'adozione della forma giuridica di SpA mantenendo il controllo pubblico",
      "La chiusura dell'impresa pubblica",
      "La quotazione in borsa",
    ],
    correctAnswer:
      "L'adozione della forma giuridica di SpA mantenendo il controllo pubblico",
    explanation:
      "La privatizzazione formale consiste nel trasformare l'ente pubblico in una società per azioni (SpA), pur mantenendo la proprietà pubblica. È come cambiare la 'forma' ma non la 'sostanza' della proprietà",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "27",
    text: "Cosa si intende per privatizzazione sostanziale?",
    options: [
      "Il cambio di nome dell'impresa pubblica",
      "Il passaggio effettivo della proprietà o del controllo da soggetti pubblici a privati",
      "La trasformazione in SpA mantenendo il controllo pubblico",
      "Il cambio di statuto",
    ],
    correctAnswer:
      "Il passaggio effettivo della proprietà o del controllo da soggetti pubblici a privati",
    explanation:
      "La privatizzazione sostanziale comporta il vero e proprio trasferimento della proprietà dell'impresa dalle mani pubbliche a quelle private",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "28",
    text: "Le imprese pubbliche sono soggette all'obbligo di iscrizione nel registro delle imprese?",
    options: [
      "No, mai",
      "Sì, con distinzione tra enti inquadrati nelle associazioni professionali (obbligati) ed enti pubblici territoriali (esenti)",
      "Sì, sempre e senza distinzioni",
      "Solo se quotate in borsa",
    ],
    correctAnswer:
      "Sì, con distinzione tra enti inquadrati nelle associazioni professionali (obbligati) ed enti pubblici territoriali (esenti)",
    explanation:
      "La legge fa una distinzione: gli enti inquadrati nelle associazioni professionali devono iscriversi, mentre gli enti pubblici territoriali sono esentati",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "29",
    text: "Le imprese pubbliche sono sottoposte allo statuto dell'imprenditore commerciale?",
    options: [
      "Sì, sempre",
      "No, sono escluse dall'ambito di applicazione dello statuto dell'imprenditore commerciale",
      "Solo se hanno più di 100 dipendenti",
      "Solo se quotate in borsa",
    ],
    correctAnswer:
      "No, sono escluse dall'ambito di applicazione dello statuto dell'imprenditore commerciale",
    explanation:
      "Le imprese pubbliche sono espressamente escluse dall'applicazione dello statuto dell'imprenditore commerciale, godendo di una disciplina speciale",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "30",
    text: "Qual è il rapporto tra privatizzazione formale e sostanziale?",
    options: [
      "Sono indipendenti l'una dall'altra",
      "La privatizzazione formale deve essere vista come strumentale alla privatizzazione sostanziale",
      "La privatizzazione sostanziale deve precedere quella formale",
      "Non c'è alcun rapporto tra le due",
    ],
    correctAnswer:
      "La privatizzazione formale deve essere vista come strumentale alla privatizzazione sostanziale",
    explanation:
      "La privatizzazione formale (trasformazione in SpA) è considerata uno step preliminare che facilita la successiva privatizzazione sostanziale (vendita ai privati)",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "31",
    text: "Come si classificano le imprese per modello organizzativo/natura?",
    options: [
      "Individuali (dirette e familiari) e collettive (private e pubbliche)",
      "Solo individuali e collettive",
      "Solo pubbliche e private",
      "Solo societarie e non societarie",
    ],
    correctAnswer:
      "Individuali (dirette e familiari) e collettive (private e pubbliche)",
    explanation:
      "Le imprese si classificano in individuali (che includono imprese dirette da una persona fisica e imprese familiari) e collettive (che si suddividono in private e pubbliche). Le collettive private possono essere societarie o non societarie",
    difficulty: "medio",
    topicId: "categorie_imprenditore",
  },
  {
    id: "32",
    text: "Quali sono le caratteristiche distintive dell'impresa familiare?",
    options: [
      "I familiari hanno diritto agli utili in proporzione al lavoro svolto, diritto di prelazione in caso di trasferimento e non partecipano alle perdite",
      "I familiari sono solo dipendenti dell'impresa",
      "I familiari sono sempre soci alla pari",
      "I familiari hanno solo diritto a uno stipendio",
    ],
    correctAnswer:
      "I familiari hanno diritto agli utili in proporzione al lavoro svolto, diritto di prelazione in caso di trasferimento e non partecipano alle perdite",
    explanation:
      "L'impresa familiare ha caratteristiche uniche: i familiari partecipano agli utili in proporzione al lavoro prestato, hanno diritto di prelazione in caso di trasferimento dell'impresa, ma non partecipano alle perdite aziendali",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "33",
    text: "Come si differenziano le imprese collettive private?",
    options: [
      "Si dividono in societarie (disciplinate dal diritto societario) e non societarie (come consorzi, GEIE, associazioni e fondazioni)",
      "Solo in società di persone e di capitali",
      "Solo in società lucrative e non lucrative",
      "Solo in società nazionali e internazionali",
    ],
    correctAnswer:
      "Si dividono in societarie (disciplinate dal diritto societario) e non societarie (come consorzi, GEIE, associazioni e fondazioni)",
    explanation:
      "Le imprese collettive private si distinguono in societarie, regolate dal diritto societario, e non societarie, che includono forme organizzative diverse come consorzi, GEIE, associazioni e fondazioni",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "34",
    text: "Quale è la differenza principale tra impresa coniugale e impresa familiare?",
    options: [
      "L'impresa coniugale è costituita dopo il matrimonio e fa capo a due persone, mentre la familiare può includere altri familiari oltre ai coniugi",
      "Non ci sono differenze sostanziali",
      "L'impresa coniugale può essere solo commerciale",
      "L'impresa familiare può essere solo agricola",
    ],
    correctAnswer:
      "L'impresa coniugale è costituita dopo il matrimonio e fa capo a due persone, mentre la familiare può includere altri familiari oltre ai coniugi",
    explanation:
      "La distinzione fondamentale sta nella struttura: l'impresa coniugale è necessariamente costituita dopo il matrimonio e fa capo ai due coniugi, mentre l'impresa familiare può coinvolgere un numero più ampio di familiari",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
  {
    id: "35",
    text: "Come si classificano le imprese pubbliche dal punto di vista organizzativo?",
    options: [
      "Si distinguono in imprese-organo e imprese-ente, con differente grado di autonomia rispetto all'ente pubblico di riferimento",
      "Sono tutte uguali dal punto di vista organizzativo",
      "Si distinguono solo in base alle dimensioni",
      "Si distinguono solo in base al settore di attività",
    ],
    correctAnswer:
      "Si distinguono in imprese-organo e imprese-ente, con differente grado di autonomia rispetto all'ente pubblico di riferimento",
    explanation:
      "Le imprese pubbliche si classificano in imprese-organo, che sono parte integrante dell'ente pubblico, e imprese-ente, che godono di maggiore autonomia pur mantenendo la natura pubblica",
    difficulty: "difficile",
    topicId: "categorie_imprenditore",
  },
];
