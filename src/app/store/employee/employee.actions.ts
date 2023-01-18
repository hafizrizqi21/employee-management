import { createAction, props } from '@ngrx/store';
import Employee from 'src/app/services/employee.model';

export const generateEmployee = createAction(
  '[Employee] Generate',
  props<{ employeeList: Employee[] }>()
);
export const addEmployee = createAction(
  '[Employee] Add',
  props<{ employee: Employee }>()
);
export const editEmployee = createAction(
  '[Employee] Edit',
  props<{ employee: Employee }>()
);
export const deleteEmployee = createAction(
  '[Employee] Delete',
  props<{ id: string }>()
);
export const setFilter = createAction(
  '[Employee] Set Filter',
  props<{ filter: string }>()
);
export const setPagination = createAction(
  '[Employee] Set Pagination',
  props<{ pageSize: number; pageIndex: number }>()
);
