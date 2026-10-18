// Italian. Dialogue is set with the base pack's em dash (—Vengo —disse
// lei—.) or with «…» and “…” quotes, all of which the base pack has.
//
// Build labels and narration pace come first, then the word lists.
//
// Choices that differ from Spanish, which this pack otherwise follows
// closely:
// - Adverbs: a manner adverb ends in -mente (lentamente), same suffix as
//   Spanish, but Italian has no subjunctive-of-"-mentare"-verb collision
//   (Spanish que alimente, que lamente): an Italian -are verb's subjunctive
//   ends in -i (che alimenti, che lamenti), not -mente. So adverbExceptions
//   here is only real nouns/adjectives ending in -mente (mente, demente,
//   clemente, inclemente, veemente), and adverbBlockers is only the
//   articles, possessives, and demonstratives before the noun mente (la
//   mente, sua mente), not object pronouns before a subjunctive.
// - No dialectPairs: the British and American pairs are English. Record
//   an Italian variant's spellings as style-sheet `preferred` entries.
// - No contractionSuffixes, contractedIs, or elisions: Italian elides an
//   article before a vowel (l'amico) as consistently as French, but not
//   often enough in dialogue to signal a voice the way French l'homme or
//   j'ai does, so the count stays off, as in Spanish.
// - numberWords has no joiners: Italian compounds a number into one word
//   (trentuno, non trenta e uno), so there is no joining word like
//   Spanish y or French et. Only 1-29 and the round tens and hundreds are
//   listed; a spelled-out 31+ chapter heading (trentuno) is not split,
//   same gap English and German accept. Digit headings (Capitolo 31)
//   always work regardless.
//
// First draft adapted from the Spanish and French packs rather than
// verified against a corpus of Italian fiction — worth spot-checking
// against real chapters before trusting it fully.

// Ordinals, masculine and feminine: a chapter number after the heading
// word (Capitolo primo), or before it (Prima parte).
const ORDINALS = [
  "primo", "prima", "secondo", "seconda", "terzo", "terza", "quarto", "quarta",
  "quinto", "quinta", "sesto", "sesta", "settimo", "settima", "ottavo", "ottava", "nono", "nona",
  "decimo", "decima", "undicesimo", "undicesima", "dodicesimo", "dodicesima"
];

export default {
  code: "it",
  name: "Italian",
  narrationRate: 130,
  labels: {
    chapter: "Capitolo {n}",
    "chapter-heading": "{chapter}. {title}",
    contents: "Indice",
    and: "{a} e {b}",
    copyright: "Copyright",
    "all-rights-reserved": "Tutti i diritti riservati.",
    "published-by": "Pubblicato da {publisher}",
    "scene-break": "Cambio di scena",
    "cover-alt": "Copertina di {title}",
    "start-of-content": "Inizio del contenuto",
    "accessibility-summary": "Libro di solo testo con indice navigabile, un titolo per ogni capitolo e un unico ordine di lettura logico.",
    "accessibility-summary-cover": "Libro testuale con immagine di copertina descritta, indice navigabile, un titolo per ogni capitolo e un unico ordine di lettura logico.",
    "review-title": "{title}: copia di revisione",
    "review-intro": "Copia di revisione.",
    "review-intro-build": "Copia di revisione, versione {build}.",
    "review-labels": "Ogni paragrafo ha un’etichetta come {label} (capitolo 3, paragrafo 12).",
    "review-quote": "Riportate l’etichetta in ogni nota, insieme alle prime parole del paragrafo, così l’autore potrà trovare il punto esatto anche dopo modifiche al testo.",
    "review-quote-build": "Riportate l’etichetta e la versione in ogni nota, insieme alle prime parole del paragrafo, così l’autore potrà trovare il punto esatto anche dopo modifiche al testo.",
    "review-note-link": "Il link Nota accanto a ogni etichetta apre una nota con questi dati già compilati.",
    note: "Nota",
    "note-title": "Scrivete una nota su {label}",
    "anchor-title": "Link a {label}",
    by: "di",
    byline: "di {names}",
    "edited-by": "A cura di {names}",
    "approximate-words": "Circa {words} parole",
    "approximate-characters": "Circa {characters} caratteri",
    "narration-opening": "{title}. Scritto da {authors}. Letto da {narrator}.",
    "narration-opening-anonymous": "{title}. Letto da {narrator}.",
    "narration-closing": "Fine. Avete ascoltato {title}, scritto da {authors}, letto da {narrator}.",
    "narration-closing-anonymous": "Fine. Avete ascoltato {title}, letto da {narrator}.",
    "narration-byline": "Scritto da {names}.",
    "narration-edited-by": "A cura di {names}.",
    "narration-contributors": "Con contributi di {names}.",
    "screenplay-credit": "Scritto da",
    "screenplay-source": "Tratto dall’opera di {authors}",
    "screenplay-source-anonymous": "Tratto dall’opera originale",
    // The codex (`build --format codex`), the story bible site: its page
    // and section names, the kinds of entity, and the headings, table
    // columns, and notes on its pages.
    "codex-story-bible": "Bibbia della storia",
    "codex-index-title": "{title}: bibbia della storia",
    "codex-timeline": "Cronologia",
    "codex-threads": "Trame e indizi",
    "codex-progress": "Avanzamento",
    "codex-characters": "Personaggi",
    "codex-locations": "Luoghi",
    "codex-factions": "Fazioni",
    "codex-artifacts": "Artefatti",
    "codex-systems": "Sistemi",
    "codex-arcs": "Archi",
    "codex-character": "Personaggio",
    "codex-location": "Luogo",
    "codex-faction": "Fazione",
    "codex-artifact": "Artefatto",
    "codex-system": "Sistema",
    "codex-arc": "Arco",
    "codex-chapters": "Capitoli",
    "codex-scenes": "Scene",
    "codex-questions": "Domande",
    "codex-promises": "Promesse",
    "codex-clues": "Indizi",
    "codex-note-spoilers": "Bibbia della storia con anticipazioni: note sulle entità, stati, morti, conoscenze, indizi e come si risolve ogni trama.",
    "codex-note-safe": "Bibbia della storia senza anticipazioni: chi e cosa compare nella storia, e dove. Note, stati, morti, conoscenze, indizi e risoluzioni sono omessi; generatela con {flag} per avere la bibbia completa.",
    "codex-no-entities": "Ancora nessun personaggio, luogo o altra entità.",
    "codex-relationships": "Relazioni",
    "codex-appears-in": "Compare in",
    "codex-advanced-in": "Avanza in",
    "codex-linked-from": "Citato in",
    "codex-changes": "Cambiamenti",
    "codex-change": "Da {chapter}: {field} diventa {value}",
    "codex-knows": "Sa",
    "codex-known-from-start": "noto fin dall’inizio",
    "codex-learned-in": "appreso in {chapter}",
    "codex-notes": "Note",
    "codex-role": "Ruolo",
    "codex-aliases": "Alias",
    "codex-status": "Stato",
    "codex-dies-in": "Muore in",
    "codex-revived-in": "Torna in vita in",
    "codex-type": "Tipo",
    "codex-region": "Regione",
    "codex-setting": "Ambientazione",
    "codex-notable-characters": "Personaggi importanti",
    "codex-routes": "Percorsi",
    "codex-hours": "{hours} h",
    "codex-members": "Membri",
    "codex-owner": "Proprietario",
    "codex-themes": "Temi",
    "codex-pronunciation": "Pronuncia",
    "codex-date": "Data",
    "codex-time": "Ora",
    "codex-scene": "Scena",
    "codex-chapter": "Capitolo",
    "codex-pov": "PdV",
    "codex-told-late": "raccontato fuori ordine",
    "codex-flashback": "flashback: {date}",
    "codex-no-dates": "Ancora nessuna scena o capitolo con una data. Assegnate alle scene un campo {field} per collocarle nel tempo della storia.",
    "codex-timeline-note": "Gli eventi nell’ordine cronologico della storia, come li elenca {command}.",
    "codex-undated": "Senza data",
    "codex-point-of-view": "Punto di vista",
    "codex-words": "Parole",
    "codex-share": "Percentuale",
    "codex-unspecified": "non specificato",
    "codex-presence": "Presenza",
    "codex-first": "Primo",
    "codex-last": "Ultimo",
    "codex-longest-gap": "Assenza più lunga",
    "codex-death": "Morte",
    "codex-dies-in-chapter": "muore nel capitolo {n}",
    "codex-threads-note": "Solo domande aperte e promesse, senza risposte né risoluzioni. Indizi e trame risolte richiedono {flag}.",
    "codex-none": "Nessun elemento.",
    "codex-question": "Domanda",
    "codex-raised-in": "Posta in",
    "codex-resolved-in": "Risolta in",
    "codex-promise": "Promessa",
    "codex-planted-in": "Seminata in",
    "codex-paid-off-in": "Mantenuta in",
    "codex-clue": "Indizio",
    "codex-clues-note": "P indica il capitolo che semina un indizio, R quello che lo rivela e x entrambi, come li mostra {command}.",
    "codex-clue-totals-one": "Indizi seminati: {planted} su {total}; rivelati: {revealed}; falsa pista: {herrings}.",
    "codex-clue-totals": "Indizi seminati: {planted} su {total}; rivelati: {revealed}; false piste: {herrings}.",
    "codex-red-herring": "falsa pista",
    "codex-significance-delayed": "significato rivelato in seguito",
    "codex-total-words": "Parole totali",
    "codex-total-characters": "Caratteri totali",
    "codex-target-words": "Obiettivo di parole",
    "codex-target-characters": "Obiettivo di caratteri",
    "codex-done": "Completato",
    "codex-remaining": "Mancanti",
    "codex-deadline": "Scadenza",
    "codex-target": "Obiettivo",
    "codex-character-count": "Caratteri",
    "codex-plot-grid": "Griglia delle trame",
    "codex-grid-note": "Archi per capitolo, come li mostra {command}: x dove un capitolo o una delle sue scene fa avanzare l’arco.",
    "codex-unknown": "sconosciuto",
    "codex-beat": "Momento chiave",
    "codex-hook": "Gancio",
    "codex-outcomes": "Esiti",
    "codex-session-log": "Registro delle sessioni"
  },

  checks: {
    filterWords: [
      "sentì", "sentiva", "sentii", "vide", "vedeva", "vidi", "udì", "udiva", "udii",
      "notò", "notava", "notai", "osservò", "osservava", "osservai", "percepì", "percepiva", "percepii",
      "parve", "pareva", "sembrò", "sembrava", "seppe", "sapeva", "seppi", "decise", "decideva", "decisi",
      "pensò", "pensava", "pensai", "credette", "credeva", "credetti", "capì", "capiva", "capii",
      "comprese", "comprendeva", "compresi", "ricordò", "ricordava", "ricordai"
    ],

    // Tags that replace "disse" with an action or a manner that no one can
    // physically say words with (sorrise, sospirò) or that describe volume
    // on top of the manner (strillò, ruggì). Verbs that are plain ways to
    // speak at a volume (sussurrò, gridò, borbottò) are left out, as in
    // Spanish, and listed in speechVerbs instead.
    saidBookisms: [
      "tuonò", "sbuffò", "strillò", "dichiarò", "sbottò", "esclamò", "gemette", "ringhiò",
      "ansimò", "abbaiò", "brontolò", "rise", "ruggì", "sentenziò", "sibilò", "singhiozzò",
      "sorrise", "sospirò", "scherzò", "asserì", "gracchiò"
    ],

    plainTags: ["disse", "dice", "dissi", "dissero", "chiese", "chiede", "chiesi", "chiesero"],

    beatPronouns: ["lui", "lei", "loro", "io", "noi", "tu", "voi"],

    adverbSuffixes: ["mente"],
    adverbLabel: "-mente adverbs",
    // Real nouns and adjectives ending in -mente, not manner adverbs; see
    // the file header for why this list is short compared to Spanish.
    adverbExceptions: ["mente", "demente", "clemente", "inclemente", "veemente"],
    // Words after which a word in -mente is the noun mente, not an adverb
    // (la mente, sua mente, questa mente).
    adverbBlockers: ["la", "una", "sua", "mia", "tua", "nostra", "vostra", "questa", "quella"],

    echoStopwords: [
      "ora", "qualcosa", "qualcuno", "lì", "prima", "quello", "quella", "qui", "sebbene", "bene",
      "ogni", "quasi", "come", "contro", "quando", "doveva", "da", "dopo", "dove", "durante",
      "loro", "allora", "tra", "erano", "stava", "stavano", "stare", "queste", "questo", "questa",
      "questi", "furono", "aveva", "avevano", "verso", "fino", "mentre", "stessa", "stesso",
      "molta", "molto", "molti", "niente", "nessuno", "mai", "altra", "altre", "altro", "altri",
      "per", "ma", "però", "poco", "poteva", "perché", "poté", "può", "voleva", "stato", "sempre",
      "sopra", "solo", "anche", "tanto", "tutta", "tutte", "ancora", "tutto", "tutti", "dietro",
      "alcune", "alcuni"
    ],

    phraseStopwords: [
      "a", "al", "come", "con", "di", "del", "il", "lui", "lei", "loro", "in", "era", "è", "quel",
      "quella", "quello", "questa", "questo", "fu", "ha", "aveva", "la", "le", "lo", "i", "gli",
      "mi", "mio", "miei", "più", "né", "no", "ci", "o", "per", "ma", "che", "si", "sì", "senza",
      "suo", "suoi", "ti", "tuo", "tuoi", "un", "una", "uno", "e", "già", "io"
    ],

    // story voices.
    speechVerbs: [
      "disse", "dice", "dissi", "diceva", "chiese", "chiede", "chiesi", "chiedeva", "rispose",
      "risponde", "ribatté", "sussurrò", "sussurra", "gridò", "grida", "borbottò", "esclamò",
      "aggiunse", "aggiunge", "spiegò", "insistette", "continuò", "proseguì", "seguì", "chiamò",
      "ammise", "esigette", "ordinò"
    ],

    speechPronouns: ["lui", "lei", "loro", "io", "noi"],

    voiceStopwords: [
      "ora", "qualcosa", "qui", "bene", "come", "quando", "dire", "disse", "sei", "questa", "è",
      "questo", "fare", "fino", "niente", "per", "ma", "però", "perché", "posso", "può", "voglio",
      "sai", "solo", "anche", "ho", "ha", "tutto", "andiamo", "vero", "favore", "allora", "mai",
      "sempre", "molto", "lei", "loro", "sono", "credo", "sopra"
    ],

    // Sentence splitting: Sig. Bianchi and Dott. Rossi never end a
    // sentence; ecc. and pag. may.
    titleAbbreviations: ["Sig", "Dott", "Prof", "Avv", "Ing", "On", "Rev", "Mons", "Gen", "Cap", "Col", "Sen"],
    contextAbbreviations: ["ecc", "pag", "cfr", "vs", "a.C", "d.C", "a. C", "d. C"],

    // Written in lower case in Italian, so only a capitalised one at the
    // start of a sentence could pass for a name.
    calendarWords: [
      "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica",
      "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto",
      "Settembre", "Ottobre", "Novembre", "Dicembre"
    ],

    // story import.
    chapterWords: ["capitolo"],
    sectionWords: ["prologo", "epilogo", "interludio", "postfazione"],
    partWords: ["parte", "libro"],
    frontMatterWords: ["prologo", "prefazione", "introduzione", "preludio", "premessa"],

    // Spelled-out chapter numbers ("Capitolo ventuno"), as one compounded
    // word; see the file header for why there is no joiners list.
    numberWords: {
      words: [
        "uno", "un", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove",
        "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici",
        "diciassette", "diciotto", "diciannove",
        "venti", "ventuno", "ventidue", "ventitré", "ventiquattro", "venticinque",
        "ventisei", "ventisette", "ventotto", "ventinove",
        "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta",
        "cento", "duecento", "trecento", "quattrocento", "cinquecento", "seicento",
        "settecento", "ottocento", "novecento",
        ...ORDINALS
      ],
      joiners: []
    },
    ordinalWords: ORDINALS,

    candidateStopwords: [
      "A", "Lì", "Ora", "Qui", "Così", "Come", "Con", "Quando", "Di", "Del", "Da", "Dopo", "Don",
      "Donna", "Dove", "Dott", "Il", "Lui", "Lei", "Loro", "In", "Allora", "Era", "È", "Quella",
      "Quello", "Questa", "Questo", "Fu", "Fino", "La", "Le", "Lo", "Mi", "Mentre", "Molto",
      "Niente", "Nessuno", "No", "Noi", "Mai", "O", "Per", "Ma", "Perché", "Che", "Chi", "Si", "Sì",
      "Senza", "Sopra", "Sig", "Signore", "Signora", "Signorina", "Suo", "Sua", "Anche", "Tutto",
      "Dietro", "Tu", "Un", "Una", "E", "Già", "Io"
    ],

    titleWords: [
      "il", "la", "lo", "i", "gli", "le", "un", "una", "di", "del", "don", "donna", "signore",
      "signora", "signorina", "sig", "dott", "dottore", "dottoressa", "re", "regina", "principe",
      "principessa", "duca", "duchessa", "conte", "contessa", "marchese", "marchesa", "barone",
      "baronessa", "capitano", "generale", "colonnello", "sergente", "tenente", "padre", "madre",
      "fra", "suor", "fratello", "sorella", "zio", "zia", "san", "santo", "santa", "professore",
      "professoressa", "maestro", "maestra", "vecchio", "vecchia", "giovane", "piccolo", "piccola"
    ]
  }
};
