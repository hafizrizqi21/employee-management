import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employee-form', component: EmployeeFormComponent, canActivate: [AuthGuard] },
  { path: 'employee-form/:id', component: EmployeeFormComponent, canActivate: [AuthGuard] },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
