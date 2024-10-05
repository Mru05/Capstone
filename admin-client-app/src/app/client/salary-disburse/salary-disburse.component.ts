import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-salary-disburse',
  templateUrl: './salary-disburse.component.html',
  styleUrls: ['./salary-disburse.component.css']
})
export class SalaryDisburseComponent {
  constructor(private router: Router) {}  // Inject Router service

  // Method to navigate to client panel
  goBackToPanel(): void {
    this.router.navigate(['/client']);
  }
}
