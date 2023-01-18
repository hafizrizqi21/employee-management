import { AuthState } from './auth/auth.reducers';
import { EmployeeState } from './employee/employee.reducers';

export interface AppState {
  auth: AuthState;
  employee: EmployeeState;
}
