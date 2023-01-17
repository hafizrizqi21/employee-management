import { Injectable } from '@angular/core';
import Employee from './employee.model';
import mock from './employee.mock'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  generateEmployees(): Employee[] {
    return mock(100)
  }
}
