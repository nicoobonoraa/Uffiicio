export interface Prenotazione {
    id: number,
    oraArrivo: Date | string,
    oraUscita: Date | string,
    isInOffice: boolean,
    stanza: number,
    persona: number
}