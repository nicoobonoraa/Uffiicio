import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import defaultPeople from "../../data/defaultPeople";
import { ADD_PERSON, addPersonAction, setIsPrenotatoAction, setSelectedRoomAction } from "../actions/actions";
import Person from "../../types/person";

const nPeople = 0


export interface PeopleState {
    peopleList: Person[],
    nPeople: number,
    selectedRoom?: number,
    isPrenotato: boolean
}

const initialState: PeopleState = {
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
        addPersonAction,
        setIsPrenotatoAction,

        setSelectedRoomAction,

    }
})

export const { addPersonAction: addPerson, setSelectedRoomAction: setSelectedRoom, setIsPrenotatoAction: setIsPrenotato } = peopleSlice.actions
export default peopleSlice.reducer;