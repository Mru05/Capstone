import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ApproveClientComponent } from './approve-client/approve-client.component';
import { BeneficiaryTransactionRequestComponent } from './beneficiary-transaction-request/beneficiary-transaction-request.component';
import { EmployeeTransactionRequestComponent } from './employee-transaction-request/employee-transaction-request.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent }, // Admin landing
  { path: 'add-bank', component: AddBankComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'approve-client', component: ApproveClientComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'employee-transaction-request', component: EmployeeTransactionRequestComponent },
  { path: 'beneficiary-transaction-request', component: BeneficiaryTransactionRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
