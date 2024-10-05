import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BeneficiaryComponent } from './beneficiary-crude/beneficiary-crude.component';
import { BeneficiaryTransactionReportComponent } from './beneficiary-transaction-report/beneficiary-transaction-report.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { ClientRoutingModule } from './client-routing.module'; // Import your routing module
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { EmployeeTransactionReportComponent } from './employee-transaction-report/employee-transaction-report.component';
import { PaymentToBeneficiaryComponent } from './payment-to-beneficiary/payment-to-beneficiary.component';
import { ReportComponent } from './report/report.component';
import { SalaryDisburseComponent } from './salary-disburse/salary-disburse.component';

@NgModule({
  declarations: [
    ClientPanelComponent,
    ClientDashboardComponent,
    SalaryDisburseComponent,
    BeneficiaryComponent,
    PaymentToBeneficiaryComponent,
    ReportComponent,
    EmployeeTransactionReportComponent,
    BeneficiaryTransactionReportComponent,
    EmployeeManagerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule, // Ensure this is imported
    FormsModule,
    HttpClientModule,

  ]
})
export class ClientModule { }
