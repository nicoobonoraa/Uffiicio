import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { UfficioState, addPrenotazione, removePrenotazione, setIsPrenotato, setPrenotazioni, setStanze, toggleIsInUfficio } from "../reducers/reducers";
import { Prenotazione } from "../../types/Prenotazione";
import axios from 'axios'
import { Stanza } from "../../types/Stanza";

const BASE_API_URL = 'https://e727-93-44-81-22.ngrok-free.app/ufficio'
const PRENOTAZIONI_URL = '/prenotazioni'
const STANZE_URL = '/stanze'

export const createPrenotazione = createAsyncThunk(
    '/ufficio/createPrenotazione',
    async (payload: Prenotazione, thunkApi) => {
        const { isPrenotazioneEffettuata } = thunkApi.getState() as UfficioState
        try {
            if (!isPrenotazioneEffettuata) {
                thunkApi.dispatch(addPrenotazione(payload))
                thunkApi.dispatch(setIsPrenotato(true))
            }
            return 1
        } catch (err) {
            return thunkApi.rejectWithValue('ERRORE' + err)
        }
    })

export const deletePrenotazione = createAsyncThunk(
    '/ufficio/deletePrenotazione',
    async (payload: number, thunkApi) => {
        const { isPrenotazioneEffettuata } = thunkApi.getState() as UfficioState
        try {
            if (!isPrenotazioneEffettuata) {
                thunkApi.dispatch(removePrenotazione(payload))
                thunkApi.dispatch(setIsPrenotato(false))
            }
            return 1
        } catch (err) {
            return thunkApi.rejectWithValue('ERRORE' + err)
        }
    })




//NEW THUNKS

export const fetchPrenotazioni = createAsyncThunk(
    '/ufficio/fetchPrenotazioni',
    async(_, {dispatch, getState, rejectWithValue}) => {
        try {
            const response = await axios.get<Prenotazione[]>(BASE_API_URL + PRENOTAZIONI_URL);
            const prenotazioni = response.data;

            // Controlla se l'utente è presente tra le prenotazioni
            const isPrenotato = prenotazioni.some(prenotazione => prenotazione.persona === 5);

            // Aggiorna lo state con `isPRenotato`
            dispatch(setIsPrenotato(isPrenotato));

            // Imposta le prenotazioni nello state
            dispatch(setPrenotazioni(prenotazioni));
        } catch (err) {
            return rejectWithValue('ERRORE DURANTE IL FETCH DELLE PRENOTAZIONI' + err);
        }
    }
)

export const fetchStanze = createAsyncThunk(
    '/ufficio/fetchStanze',
    async(_, {dispatch, rejectWithValue}) => {
        axios.get<Stanza[]>(BASE_API_URL + STANZE_URL).then(response => {
            dispatch(setStanze(response.data))
        })
    }
)

interface addPrenotazioneBody {
    "newPrenotazione" : Prenotazione
}

export const aggiungiPrenotazione = createAsyncThunk(
    '/ufficio/aggiungiPrenotazione',
    async (prenotazione : Prenotazione, {dispatch, getState, rejectWithValue}) => {
        try {
            const data : addPrenotazioneBody = {
                "newPrenotazione" : prenotazione
            }


            axios.post(
                BASE_API_URL + PRENOTAZIONI_URL,
                data,
                )
            .then(() => {
                dispatch(fetchPrenotazioni()).then(
                    () => {}
                )
            })
            .catch((err) => console.error(err))
        } catch(err) {
            return rejectWithValue('ERRORE DURANTE IL POST DELLA PRENOTAZIONE' + err)
        }
    }
)

interface DeletePrenotazioneBody {
    "prenotazioneId" : number
}

export const rimuoviPrenotazione = createAsyncThunk(
    '/ufficio/rimuoviPrenotazione',
    async(_, {dispatch, getState, rejectWithValue}) => {
        try {
            axios.delete(BASE_API_URL + PRENOTAZIONI_URL + '/5')
            .then(() => {
                dispatch(fetchPrenotazioni()).then(
                    () => {
                        dispatch(setIsPrenotato(false))
                        // const {in} = getState() as UfficioState
                    }
                ).catch(err => console.error(err)) 
            }).catch(err => console.error(err)) 
        } catch(err) {
            return rejectWithValue('ERRORE DURANTE LA DELETE DELLA PRENOTAZIONE' + err)
        }
    }
)

export const toggleInUfficio = createAsyncThunk(
    '/ufficio/toggleInUfficio',
    async(_, {dispatch, rejectWithValue}) => {
        try {
            axios.put(BASE_API_URL + PRENOTAZIONI_URL + '/5/isInUfficio').then(() => {
                    dispatch(fetchPrenotazioni())
                }
            )
        } catch(err) {
            return rejectWithValue('ERRORE DURANTE IL TOGGLE DI ISINUFFICIO' + err)
        }
    }
)