import { Component } from '@angular/core';

interface EmployeeTransaction {
  employee_id: number;
  account_number: string;
  email: string;
  first_name: string;
  last_name: string;
  salary: number;
  client_registration_number: string;
}

@Component({
  selector: 'app-employee-transaction-report',
  templateUrl: './employee-transaction-report.component.html',
})
export class EmployeeTransactionReportComponent {
  employees: EmployeeTransaction[] = [
    { employee_id: 1, account_number: '1234567890', email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe', salary: 50000, client_registration_number: 'CRN123' },
    { employee_id: 2, account_number: '2345678901', email: 'jane.smith@example.com', first_name: 'Jane', last_name: 'Smith', salary: 60000, client_registration_number: 'CRN456' },
    { employee_id: 3, account_number: '3456789012', email: 'sam.wilson@example.com', first_name: 'Sam', last_name: 'Wilson', salary: 55000, client_registration_number: 'CRN789' },
    { employee_id: 4, account_number: '4567890123', email: 'lisa.brown@example.com', first_name: 'Lisa', last_name: 'Brown', salary: 62000, client_registration_number: 'CRN321' },
  ];

  sortedField: string = 'employee_id'; // Default sorted field
  isAsc: boolean = true; // Default sort order

  // Sort options
  sortOptions = [
    { value: 'employee_id', label: 'Employee ID' },
    { value: 'account_number', label: 'Account Number' },
    { value: 'email', label: 'Email' },
    { value: 'first_name', label: 'First Name' },
    { value: 'last_name', label: 'Last Name' },
    { value: 'salary', label: 'Salary' },
    { value: 'client_registration_number', label: 'Client Registration Number' },
  ];

  sortTable(field: string) {
    if (this.sortedField === field) {
      this.isAsc = !this.isAsc;
    } else {
      this.sortedField = field;
      this.isAsc = true;
    }

    this.employees.sort((a, b) => {
      const valA = a[field as keyof EmployeeTransaction];
      const valB = b[field as keyof EmployeeTransaction];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else {
        return this.isAsc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
      }
    });
  }
}
