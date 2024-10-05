import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ApproveClientComponent } from './approve-client/approve-client.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EmployeeTransactionRequestComponent } from './employee-transaction-request/employee-transaction-request.component';
import { BeneficiaryTransactionRequestComponent } from './beneficiary-transaction-request/beneficiary-transaction-request.component';


@NgModule({
  declarations: [
    AddBankComponent,
    AddClientComponent,
    ApproveClientComponent,
    ReportsComponent,
    AdminPanelComponent,
    EmployeeTransactionRequestComponent,
    BeneficiaryTransactionRequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
