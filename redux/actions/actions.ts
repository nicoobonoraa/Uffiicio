import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import Person from "../../types/person"
import { PeopleState } from "../reducers/reducers";
import { act } from "react-test-renderer";

export const addPersonAction = (state: PeopleState) => {


    const newSelf = { ...state.self }
    newSelf.oraArrivo = new Date(newSelf.oraArrivo).toISOString()
    newSelf.oraUscita = new Date(newSelf.oraArrivo).toISOString()

    if (!state.isPrenotato) {
        // console.log("its not prenotato")
        setIsPrenotatoAction(state)
        state.nPeople++

        const newPeopleList = [...state.peopleList, newSelf]
        console.log(newPeopleList)

        state.self = newSelf
        state.peopleList.push(newSelf)

    } else {
        // console.log("initialListInElse")
        console.log(state.peopleList)
        const updatedPeopleList = state.peopleList.map(person => {
            console.log(person.key)
            if (person.key === state.self.key) {
                return newSelf;
            }
            return person;
        });

        state.self = newSelf
        state.peopleList = updatedPeopleList
    }
}

export const createMeAction = (state: PeopleState, action: PayloadAction<Person>) => {
    state.self.oraArrivo = action?.payload.oraArrivo ? new Date(action?.payload.oraArrivo).toISOString() : new Date(state.self.oraArrivo).toISOString()
    state.self.oraUscita = action?.payload.oraUscita ? new Date(action?.payload.oraUscita).toISOString() : new Date(state.self.oraUscita).toISOString()
    state.self.stanza = action?.payload.stanza ? action?.payload.stanza : state.self.stanza
    state.self.isInOffice = action?.payload.isInOffice ? action?.payload.isInOffice : state.self.isInOffice
    addPersonAction(state)
}

export const setSelectedRoomAction = (state: PeopleState, action: PayloadAction<number>) => {
    state.selectedRoom = action.payload
}

export const setIsPrenotatoAction = (state: PeopleState) => {
    state.isPrenotato = !state.isPrenotato
}

export const toggleIsInOfficeAction = (state: PeopleState, action: PayloadAction<boolean>) => {
    state.self.isInOffice = action.payload
    addPersonAction(state)
    // createMeAction(state)
    console.log(state.self)
}