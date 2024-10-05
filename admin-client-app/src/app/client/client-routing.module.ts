import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryComponent } from './beneficiary-crude/beneficiary-crude.component';
import { BeneficiaryTransactionReportComponent } from './beneficiary-transaction-report/beneficiary-transaction-report.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { EmployeeTransactionReportComponent } from './employee-transaction-report/employee-transaction-report.component';
import { PaymentToBeneficiaryComponent } from './payment-to-beneficiary/payment-to-beneficiary.component';
import { ReportComponent } from './report/report.component';
import { SalaryDisburseComponent } from './salary-disburse/salary-disburse.component';

const routes: Routes = [
  { path: '', component: ClientPanelComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'salary-disburse', component: SalaryDisburseComponent },
  { path: 'employee-manager', component: EmployeeManagerComponent },
  { path: 'beneficiary-crude', component: BeneficiaryComponent },
  { path: 'payment-to-beneficiary', component: PaymentToBeneficiaryComponent },
  { path: 'report', component: ReportComponent },
  { path: 'report/employee-transaction-report', component: EmployeeTransactionReportComponent },
  { path: 'report/beneficiary-transaction-report', component: BeneficiaryTransactionReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
