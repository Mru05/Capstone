import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientProfileDto } from '../model/client-profile-dto';

@Injectable({
  providedIn: 'root'
})
export class CreateProfileServiceService {
  private apiUrl = 'http://localhost:8080/app' // Replace with your API URL

  constructor(private http: HttpClient) {}

  createProfile(clientProfile: ClientProfileDto): Observable<ClientProfileDto> {
    return this.http.put<ClientProfileDto>(`${this.apiUrl}/${clientProfile.registrationNumber}`, clientProfile);
  }
}
