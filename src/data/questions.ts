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
];
