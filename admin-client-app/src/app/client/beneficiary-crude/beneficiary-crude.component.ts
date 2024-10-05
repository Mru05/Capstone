import { Component, OnInit } from '@angular/core';
import { Beneficiary, BeneficiaryService } from '../services/beneficiary.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary-crude.component.html',
})
export class BeneficiaryComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  newBeneficiary: Beneficiary = {
    beneficiary_id: 0,
    beneficiary_account_number: '',
    beneficiary_amount: 0,
    beneficiary_ifsc: '',
    beneficiary_name: '',
    registration_number: '',
  };

  constructor(private beneficiaryService: BeneficiaryService) {}

  ngOnInit() {
    this.beneficiaryService.beneficiaries$.subscribe(data => {
      this.beneficiaries = data;
    });
  }

  addBeneficiary() {
    if (this.newBeneficiary.beneficiary_id) {
      // Update existing beneficiary
      this.beneficiaryService.updateBeneficiary(this.newBeneficiary);
    } else {
      // Add new beneficiary
      const id = this.beneficiaries.length ? this.beneficiaries[this.beneficiaries.length - 1].beneficiary_id + 1 : 1;
      this.beneficiaryService.addBeneficiary({ ...this.newBeneficiary, beneficiary_id: id });
    }

    // Reset the form after adding/updating
    this.resetForm();
  }

  populateForUpdate(beneficiary: Beneficiary) {
    // Populate the form with selected beneficiary data for updating
    this.newBeneficiary = { ...beneficiary };
  }

  deleteBeneficiary(id: number) {
    this.beneficiaryService.deleteBeneficiary(id);
  }

  resetForm() {
    this.newBeneficiary = {
      beneficiary_id: 0,
      beneficiary_account_number: '',
      beneficiary_amount: 0,
      beneficiary_ifsc: '',
      beneficiary_name: '',
      registration_number: '',
    };
  }
}
