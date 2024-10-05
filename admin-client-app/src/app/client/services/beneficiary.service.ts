import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Beneficiary {
  beneficiary_id: number;
  beneficiary_account_number: string;
  beneficiary_amount: number;
  beneficiary_ifsc: string;
  beneficiary_name: string;
  registration_number: string;
}

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private beneficiaries: Beneficiary[] = [];
  private beneficiariesSubject = new BehaviorSubject<Beneficiary[]>(this.beneficiaries);
  beneficiaries$ = this.beneficiariesSubject.asObservable();

  addBeneficiary(beneficiary: Beneficiary) {
    this.beneficiaries.push(beneficiary);
    this.beneficiariesSubject.next(this.beneficiaries);
  }

  updateBeneficiary(updatedBeneficiary: Beneficiary) {
    const index = this.beneficiaries.findIndex(b => b.beneficiary_id === updatedBeneficiary.beneficiary_id);
    if (index > -1) {
      this.beneficiaries[index] = updatedBeneficiary;
      this.beneficiariesSubject.next(this.beneficiaries);
    }
  }

  deleteBeneficiary(id: number) {
    this.beneficiaries = this.beneficiaries.filter(b => b.beneficiary_id !== id);
    this.beneficiariesSubject.next(this.beneficiaries);
  }

  makePayment(selectedBeneficiaryId: number, paymentAmount: number, paymentReference: string) {
    const beneficiary = this.beneficiaries.find(b => b.beneficiary_id === selectedBeneficiaryId);
    if (beneficiary) {
      // Update the amount for the beneficiary based on the payment
      beneficiary.beneficiary_amount -= paymentAmount;

      // Optionally, log or handle the payment reference
      console.log(`Payment of ${paymentAmount} made to ${beneficiary.beneficiary_name} with reference ${paymentReference}`);

      // Notify subscribers about the updated beneficiaries
      this.beneficiariesSubject.next(this.beneficiaries);
    } else {
      console.error('Beneficiary not found for payment');
    }
  }
}
