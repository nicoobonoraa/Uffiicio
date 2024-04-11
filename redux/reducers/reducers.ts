import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import defaultPeople from "../../data/defaultPeople";
// import { ADD_PERSON, addPersonAction, createMeAction, setIsPrenotatoAction, setSelectedRoomAction } from "../actions/actions";
import Person from "../../types/person";
import { me } from "../../data/me";
import { createMeAction, setIsPrenotatoAction, setSelectedRoomAction } from "../actions/actions";

const nPeople = 0


export interface PeopleState {
    peopleList: Person[],
    nPeople: number,
    selectedRoom?: number,
    isPrenotato: boolean,
    self: Person
}

const initialState: PeopleState = {
    self: me,
    peopleList: defaultPeople.map(person => ({
        ...person,
        oraArrivo: new Date(person.oraArrivo).toISOString(),
        oraUscita: new Date(person.oraArrivo).toISOString()
    })),
    nPeople: defaultPeople.length,
    selectedRoom: undefined,
    isPrenotato: false
};

const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        setIsPrenotatoAction,
        createMeAction,
        setSelectedRoomAction

    }
})

export const { createMeAction: createMe, setSelectedRoomAction: setSelectedRoom, setIsPrenotatoAction: setIsPrenotato } = peopleSlice.actions
export default peopleSlice.reducer;