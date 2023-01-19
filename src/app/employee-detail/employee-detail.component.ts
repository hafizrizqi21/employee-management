import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { lastValueFrom, take } from 'rxjs';
import { selectAllEmployee } from '../store/employee/employee.selectors';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  id: string = '';
  employee = {
    id: '',
    username: '',
    name: '',
    email: '',
    birthDate: '',
    basicSalary: 0,
    status: '',
    group: '',
    description: '',
  };
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      const allEmployee = await lastValueFrom(
        this.store.pipe(select(selectAllEmployee), take(1))
      );
      let res = allEmployee.find((e) => e.id === this.id);
      if(res) this.employee = {
        ...res,
        name: `${res.firstName} ${res.lastName}` 
      }
    }
  }
}
