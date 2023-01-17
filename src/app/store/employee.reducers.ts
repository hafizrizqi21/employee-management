import { createReducer, on, State } from "@ngrx/store";
import { generateEmployee, addEmployee, editEmployee, deleteEmployee } from "./employee.actions";

export const initialState = {
    employeeList: []
}

export const employeeReducer = createReducer(
    initialState,
    on(generateEmployee, (state)=>({...state})),
    on(addEmployee, (state, {employee})=>({...state})),
    on(editEmployee, (state, {employee})=>({...state})),
    on(deleteEmployee, (state, {id})=>({...state})),
)