import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import Person from "../../types/person"
import { PeopleState } from "../reducers/reducers";

export const ADD_PERSON = 'ADD_PERSON'


export const addPersonAction = (state: PeopleState) => {

    console.log(state.isPrenotato)
    const person = state.self

    console.log(state.peopleList.length)
    console.log(state.self)
    // if (state.isPrenotato) {
    //     return {
    //         ...state,
    //         peopleList: [...state.peopleList, action.payload]
    //     };
    // } else {
    //     return {
    //         ...state
    //     }
    // }
    if (!state.isPrenotato) {
        console.log(state.peopleList)
        setIsPrenotatoAction(state)
        person.oraArrivo = new Date(person.oraArrivo).toISOString()
        person.oraUscita = new Date(person.oraArrivo).toISOString()
        state.peopleList.push(person)
        console.log(state.peopleList)
    } else {
        console.log("dentroallelse")
        state.peopleList = state.peopleList
    }
}

export const createMeAction = (state: PeopleState, action: PayloadAction<Person>) => {
    state.self.oraArrivo = action.payload.oraArrivo ? new Date(action.payload.oraArrivo).toISOString() : new Date(state.self.oraArrivo).toISOString()
    state.self.oraUscita = action.payload.oraUscita ? new Date(action.payload.oraUscita).toISOString() : new Date(state.self.oraUscita).toISOString()
    state.self.stanza = action.payload.stanza ? action.payload.stanza : state.self.stanza

    addPersonAction(state)
}

export const setSelectedRoomAction = (state: PeopleState, action: PayloadAction<number>) => {
    state.selectedRoom = action.payload
}

export const setIsPrenotatoAction = (state: PeopleState) => {
    state.isPrenotato = !state.isPrenotato
}