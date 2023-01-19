import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeService } from './services/employee.service';
import { AppState } from './store/app.state';
import { selectIsLoggedIn } from './store/auth/auth.selectors';
import { generateEmployee } from './store/employee/employee.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.store.select(selectIsLoggedIn)
  constructor(
    private employeeService: EmployeeService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    const res = this.employeeService.generateEmployees();
    this.store.dispatch(generateEmployee({ employeeList: res }));
  }
}
