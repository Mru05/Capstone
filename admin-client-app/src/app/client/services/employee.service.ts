import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'YOUR_API_URL';  // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);  // Assuming you have an endpoint for fetching employees
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/employees`, employee);  // Assuming your API accepts POST requests for adding employees
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/employees/${employee.id}`, employee);  // Assuming your API accepts PUT requests for updating employees
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${id}`);  // Assuming your API accepts DELETE requests for deleting employees
  }
}
