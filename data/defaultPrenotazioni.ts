import { Prenotazione } from "../types/Prenotazione";

export const defaultPrenotazioni: Prenotazione[] = [
    {
        id: 0,
        oraArrivo: new Date(2024, 3, 13, 9, 30).toISOString(), // 13 aprile 2024, ore 09:30
        oraUscita: new Date(2024, 3, 13, 13, 30).toISOString(), // 13 aprile 2024, ore 13:30
        isInOffice: false,
        stanza: 2,
        persona: 1
    },
    {
        id: 1,
        oraArrivo: new Date(2024, 3, 12, 9, 0).toISOString(), // 12 aprile 2024, ore 09:00
        oraUscita: new Date(2024, 3, 12, 12, 0).toISOString(), // 12 aprile 2024, ore 12:00
        isInOffice: true,
        stanza: 1,
        persona: 0
    },
    {
        id: 2,
        oraArrivo: new Date(2024, 3, 12, 10, 30).toISOString(), // 12 aprile 2024, ore 10:30
        oraUscita: new Date(2024, 3, 12, 14, 30).toISOString(), // 12 aprile 2024, ore 14:30
        isInOffice: false,
        stanza: 2,
        persona: 2
    },
    {
        id: 3,
        oraArrivo: new Date(2024, 3, 12, 14, 0).toISOString(), // 12 aprile 2024, ore 14:00
        oraUscita: new Date(2024, 3, 12, 18, 0).toISOString(), // 12 aprile 2024, ore 18:00
        isInOffice: true,
        stanza: 3,
        persona: 3
    },
    {
        id: 4,
        oraArrivo: new Date(2024, 3, 12, 14, 0).toISOString(), // 12 aprile 2024, ore 14:00
        oraUscita: new Date(2024, 3, 12, 18, 0).toISOString(), // 12 aprile 2024, ore 18:00
        isInOffice: false,
        stanza: 0,
        persona: 4
    },
    // {
    //     id: 4,
    //     oraArrivo: new Date(2024, 3, 13, 8, 0), // 13 aprile 2024, ore 08:00
    //     oraUscita: new Date(2024, 3, 13, 17, 0), // 13 aprile 2024, ore 17:00
    //     isInOffice: false,
    //     stanza: 1,
    //     persona: 3
    // }
];

// module.exports = defaultPrenotazioni