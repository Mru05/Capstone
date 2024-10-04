import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBankComponent } from './shared/add-bank/add-bank.component';
import { AddBeneficiaryComponent } from './shared/add-beneficiary/add-beneficiary.component';
import { AddEmployeeComponent } from './shared/add-employee/add-employee.component';
import { AdminDashboardComponent } from './shared/admin-dashboard/admin-dashboard.component';
import { BeneficiaryReportComponent } from './shared/beneficiary-report/beneficiary-report.component';
import { CreateProfileComponent } from './shared/create-profile/create-profile.component';
import { EmployeeReportComponent } from './shared/employee-report/employee-report.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { PaymentToBeneficiaryComponent } from './shared/payment-to-beneficiary/payment-to-beneficiary.component';
import { RegisterPageComponent } from './shared/register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    AdminDashboardComponent,
    CreateProfileComponent,
    AddBankComponent,
    AddEmployeeComponent,
    AddBeneficiaryComponent,
    PaymentToBeneficiaryComponent,
    BeneficiaryReportComponent,
    EmployeeReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    

  ],
  providers: [
    provideHttpClient(),
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, // Provide JwtHelperService options 
    JwtHelperService, provideAnimationsAsync() // Add JwtHelperService to providers 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
