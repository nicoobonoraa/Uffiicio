import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import defaultPeople from "../../data/defaultPeople";
import { ADD_PERSON, addPerson } from "../actions/actions";
import Person from "../../types/person";

const nPeople = 0


export interface PeopleState {
    peopleList: Person[],
    nPeople: number
}

const initialState: PeopleState = {
    peopleList: defaultPeople,
    nPeople: defaultPeople.length
};

const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        addPerson
    }
})

export default peopleSlice.reducer