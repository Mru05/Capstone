import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientProfileDto } from '../../model/client-profile-dto';
import { CreateProfileServiceService } from '../../service/create-profile-service.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  createProfileForm: FormGroup; // Declare the form group
  registrationNumber!: number; // Add this to hold the registration number

  constructor(
    private fb: FormBuilder,
    private createProfileService: CreateProfileServiceService
  ) {
    // Initialize the form in the constructor
    this.createProfileForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      balance: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  ngOnInit(): void {
    // Fetch the registration number from local storage
    const token = localStorage.getItem('bearerToken'); // Change this to your actual token key
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.registrationNumber = payload.registrationNumber; // Adjust according to your token structure
    }
  }

  onSubmit(): void {
    if (this.createProfileForm.valid) {
      const profileData: ClientProfileDto = {
        registrationNumber: this.registrationNumber,
        ...this.createProfileForm.value // Spread operator to get form values
      };

      this.createProfileService.createProfile(profileData).subscribe({
        next: (response) => {
          console.log('Profile created successfully', response);
        },
        error: (error) => {
          console.error('Error creating profile', error);
        }
      });
    }
  }
}
