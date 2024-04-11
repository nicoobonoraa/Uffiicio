import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import Person from "../../types/person"
import { PeopleState } from "../reducers/reducers";

export const ADD_PERSON = 'ADD_PERSON'


export const addPersonAction = (state: PeopleState, action: PayloadAction<Person>) => {

    console.log(state.isPrenotato)

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
        setIsPrenotatoAction(state)
        action.payload.oraArrivo = new Date(action.payload.oraArrivo).toISOString()
        action.payload.oraUscita = new Date(action.payload.oraArrivo).toISOString()
        state.peopleList.push(action.payload)
    } else {
        state.peopleList = state.peopleList
    }
}

export const setSelectedRoomAction = (state: PeopleState, action: PayloadAction<number>) => {
    state.selectedRoom = action.payload
}

export const setIsPrenotatoAction = (state: PeopleState) => {
    state.isPrenotato = !state.isPrenotato
}