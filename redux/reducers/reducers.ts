import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { ADD_PERSON, addPersonAction, createMeAction, setIsPrenotatoAction, setSelectedRoomAction } from "../actions/actions";
import Person from "../../types/person";
import { addPrenotazioneAction, setIsPrenotatoAction, setSelectedRoomAction, toggleIsInUfficioAction } from "../actions/actions";
import { Stanza } from "../../types/Stanza";
import { Prenotazione } from "../../types/Prenotazione";
import { defaultPeople } from "../../data/defaultPeople";
import { defaultStanze } from "../../data/defaultStanze";
import { defaultPrenotazioni } from "../../data/defaultPrenotazioni";
import { createPrenotazione } from "../thunks/thunks";
const nPeople = 0


export interface UfficioState {
    stanzeList: Stanza[],
    peopleList: Person[],
    prenotazioneList: Prenotazione[],
    isPrenotazioneEffettuata: boolean,
    selectedRoom: number
}

const initialState: UfficioState = {
    stanzeList: defaultStanze,
    peopleList: defaultPeople,
    prenotazioneList: defaultPrenotazioni,
    isPrenotazioneEffettuata: false,
    selectedRoom: 1
};

const peopleSlice = createSlice({
    name: "ufficio",
    initialState,
    reducers: {
        addPrenotazioneAction,
        setIsPrenotatoAction,
        setSelectedRoomAction,
        toggleIsInUfficioAction
    },
    extraReducers: (builder) => {
        builder.addCase(createPrenotazione.pending, (state) => { });
        builder.addCase(createPrenotazione.fulfilled, (state) => { return { ...state } });
        builder.addCase(createPrenotazione.rejected, (state) => { });
    }
})

export const {
    addPrenotazioneAction: addPrenotazione,
    setIsPrenotatoAction: setIsPrenotato,
    setSelectedRoomAction: setSelectedRoom,
    toggleIsInUfficioAction: toggleIsInUfficio,
    ...actions } = peopleSlice.actions
export default peopleSlice.reducer;

