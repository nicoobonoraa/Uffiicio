import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";

const selectAllPeople = (state: IRootState) => state.peopleReducer.peopleList

// const selectedPeopleOnRoom = createSelector(selectAllPeople, (result) => {
//     const
// })