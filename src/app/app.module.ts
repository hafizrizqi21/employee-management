import { employeeReducer } from './store/employee/employee.reducers';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './shared/dialog/dialog.component';
import { authReducer } from './store/auth/auth.reducers';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    DialogComponent,
    NavbarComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    StoreModule.forRoot({ employee: employeeReducer, auth: authReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
