import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import Person from "../../types/person"
import { PeopleState } from "../reducers/reducers";

export const ADD_PERSON = 'ADD_PERSON'


export const addPerson = (state: PeopleState, action: PayloadAction<Person>) => {
    state.peopleList.push(action.payload)
}