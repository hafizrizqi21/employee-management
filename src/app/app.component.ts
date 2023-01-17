import { Component, OnInit } from '@angular/core';
import Employee from './services/employee.model';
import { EmployeeService } from './services/employee.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  title = 'employee-management';
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'birthDate',
    'basicSalary',
    'status',
    'group',
    'description',
  ];
  employeeList: Employee[] = [];

  //Pagination
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent = new PageEvent();

  ngOnInit(): void {
    this.employeeList = this.employeeService.generateEmployees();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setSizePageOptions(setSizePageOptionsInput: string) {
    if (setSizePageOptionsInput) {
      this.pageSizeOptions = setSizePageOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
