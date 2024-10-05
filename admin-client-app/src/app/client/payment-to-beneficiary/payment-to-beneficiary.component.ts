import { Component, OnInit } from '@angular/core';
import { Beneficiary, BeneficiaryService } from '../services/beneficiary.service';

@Component({
  selector: 'app-payment-to-beneficiary',
  templateUrl: './payment-to-beneficiary.component.html',
})
export class PaymentToBeneficiaryComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  selectedBeneficiaryId: number | null = null;
  paymentAmount: number = 0;
  paymentReference: string = '';

  constructor(private beneficiaryService: BeneficiaryService) {}

  ngOnInit() {
    this.beneficiaryService.beneficiaries$.subscribe(data => {
      this.beneficiaries = data;
    });
  }

  makePayment() {
    if (this.selectedBeneficiaryId && this.paymentAmount > 0 && this.paymentReference.trim()) {
      this.beneficiaryService.makePayment(this.selectedBeneficiaryId, this.paymentAmount, this.paymentReference);
      this.resetForm();
    } else {
      alert('Please fill all the fields.');
    }
  }

  resetForm() {
    this.selectedBeneficiaryId = null;
    this.paymentAmount = 0;
    this.paymentReference = '';
  }
}
