import { DialogComponent } from './../shared/dialog/dialog.component';
import { formatNominal } from './../utils/index';
import { AppState } from './../store/app.state';
import {
  deleteEmployee,
  setFilter,
  setPagination,
} from '../store/employee/employee.actions';
import { Component, OnInit } from '@angular/core';
import Employee from '../services/employee.model';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import {
  filter,
  length,
  pageIndex,
  pageSize,
  filteredEmployee,
} from '../store/employee/employee.selectors';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeList$ = this.store.select(filteredEmployee);

  //Filter
  filter = this.store.select(filter);
  //Pagination
  length$ = this.store.select(length);
  pageSize$ = this.store.select(pageSize);
  pageIndex$ = this.store.select(pageIndex);
  pageSizeOptions = [5, 10, 25];

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private router: Router
  ) {}
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    // 'birthDate',
    // 'basicSalary',
    'status',
    'group',
    // 'description',
    'actions',
  ];
  employeeListView: Employee[] = [];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent = new PageEvent();

  ngOnInit(): void {
    this.store.dispatch(
      setPagination({
        pageSize: 10,
        pageIndex: 0,
      })
    );
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.store.dispatch(
      setPagination({
        pageSize: e.pageSize,
        pageIndex: e.pageIndex,
      })
    );
  }

  setSizePageOptions(setSizePageOptionsInput: string) {
    if (setSizePageOptionsInput) {
      this.pageSizeOptions = setSizePageOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  onFilter(e: any) {
    this.store.dispatch(setFilter({ filter: e.target.value }));
  }

  onView(employee: Employee) {
    this.router.navigate(['/employee-detail', employee.id]);
  }

  onEdit(employee: Employee) {
    this.router.navigate(['/employee-form', employee.id]);
  }

  onDelete(employee: Employee) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Delete File',
        description: `Are you sure to delete user ${employee.username}?`,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.store.dispatch(deleteEmployee({ id: employee.id }));
    });
  }

  format(value: number) {
    return formatNominal(value);
  }
}
