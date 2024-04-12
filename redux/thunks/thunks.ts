import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { UfficioState, addPrenotazione, setIsPrenotato } from "../reducers/reducers";
import { Prenotazione } from "../../types/Prenotazione";

export const createPrenotazione = createAsyncThunk(
    '/ufficio/createPrenotazione',
    async (payload: Prenotazione, thunkApi) => {
        const { isPrenotazioneEffettuata } = thunkApi.getState() as UfficioState
        try {
            if (!isPrenotazioneEffettuata) {
                thunkApi.dispatch(addPrenotazione(payload))
                thunkApi.dispatch(setIsPrenotato())
            }
            return 1
        } catch (err) {
            return thunkApi.rejectWithValue('ERRORE' + err)
        }
    })