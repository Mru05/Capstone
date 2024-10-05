import { Component } from '@angular/core';

interface BeneficiaryTransaction {
  beneficiary_id: number;
  beneficiary_account_number: string;
  beneficiary_amount: number;
  beneficiary_ifsc: string;
  beneficiary_name: string;
  registration_number: string;
}

@Component({
  selector: 'app-beneficiary-transaction-report',
  templateUrl: './beneficiary-transaction-report.component.html',
})
export class BeneficiaryTransactionReportComponent {
  beneficiaries: BeneficiaryTransaction[] = [
    { beneficiary_id: 1, beneficiary_account_number: '1234567890', beneficiary_amount: 10000, beneficiary_ifsc: 'IFSC001', beneficiary_name: 'John Doe', registration_number: 'REG001' },
    { beneficiary_id: 2, beneficiary_account_number: '2345678901', beneficiary_amount: 15000, beneficiary_ifsc: 'IFSC002', beneficiary_name: 'Jane Smith', registration_number: 'REG002' },
    { beneficiary_id: 3, beneficiary_account_number: '3456789012', beneficiary_amount: 12000, beneficiary_ifsc: 'IFSC003', beneficiary_name: 'Sam Wilson', registration_number: 'REG003' },
    { beneficiary_id: 4, beneficiary_account_number: '4567890123', beneficiary_amount: 20000, beneficiary_ifsc: 'IFSC004', beneficiary_name: 'Lisa Brown', registration_number: 'REG004' },
  ];

  sortedField: string = 'beneficiary_id'; // Default sorted field
  isAsc: boolean = true; // Default sort order

  // Sort options
  sortOptions = [
    { value: 'beneficiary_id', label: 'Beneficiary ID' },
    { value: 'beneficiary_account_number', label: 'Account Number' },
    { value: 'beneficiary_amount', label: 'Amount' },
    { value: 'beneficiary_ifsc', label: 'IFSC Code' },
    { value: 'beneficiary_name', label: 'Beneficiary Name' },
    { value: 'registration_number', label: 'Registration Number' },
  ];

  sortTable(field: string) {
    if (this.sortedField === field) {
      this.isAsc = !this.isAsc;
    } else {
      this.sortedField = field;
      this.isAsc = true;
    }

    this.beneficiaries.sort((a, b) => {
      const valA = a[field as keyof BeneficiaryTransaction];
      const valB = b[field as keyof BeneficiaryTransaction];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else {
        return this.isAsc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
      }
    });
  }
}
