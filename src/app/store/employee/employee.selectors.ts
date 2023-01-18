import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EmployeeState } from './employee.reducers';

export const selectEmployee = (state: AppState) => state.employee;
export const selectAllEmployee = createSelector(
  selectEmployee,
  (state: EmployeeState) => state.employeeList
);
export const filter = createSelector(
  selectEmployee,
  (state: EmployeeState) => state.filter
);
export const length = createSelector(selectEmployee, (state: EmployeeState) => {
  const { employeeList, filter } = state;
  return employeeList.filter(
    (e) =>
      e.username.includes(filter) &&
      `${e.firstName} ${e.lastName}`.includes(filter.trim())
  ).length;
});
export const pageSize = createSelector(
  selectEmployee,
  (state: EmployeeState) => state.pageSize
);
export const pageIndex = createSelector(
  selectEmployee,
  (state: EmployeeState) => state.pageIndex
);
export const filteredEmployee = createSelector(
  selectEmployee,
  (state: EmployeeState) => {
    const { employeeList, filter, pageIndex, pageSize } = state;
    const filteredEmployeeList = employeeList.filter(
      (e) =>
        e.username.includes(filter) &&
        `${e.firstName} ${e.lastName}`.includes(filter.trim())
    );
    return filteredEmployeeList.slice(
      pageIndex * state.pageSize,
      (pageIndex + 1) * pageSize
    );
  }
);
