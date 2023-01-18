import { createReducer, on } from '@ngrx/store';
import Employee from 'src/app/services/employee.model';
import {
  generateEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
  setFilter,
  setPagination,
} from './employee.actions';

export interface EmployeeState {
  employeeList: Employee[];
  filter: string;
  pageSize: number;
  pageIndex: number;
}

export const initialState: EmployeeState = {
  employeeList: [],
  filter: '',
  pageSize: 10,
  pageIndex: 0,
};

export const employeeReducer = createReducer(
  initialState,
  on(generateEmployee, (state, { employeeList }) => ({
    ...state,
    employeeList: employeeList,
  })),
  on(addEmployee, (state, { employee }) => ({
    ...state,
    employeeList: [employee, ...state.employeeList],
  })),
  on(editEmployee, (state, { employee }) => {
    let tempEmployeeList = state.employeeList.map((e) =>
      e.id === employee.id ? employee : e
    );
    return { ...state, employeeList: tempEmployeeList };
  }),
  on(deleteEmployee, (state, { id }) => ({
    ...state,
    employeeList: state.employeeList.filter((e) => e.id !== id),
  })),
  on(setFilter, (state, { filter }) => ({ ...state, filter: filter })),
  on(setPagination, (state, { pageSize, pageIndex }) => ({
    ...state,
    pageSize,
    pageIndex,
  }))
);
