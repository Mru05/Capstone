import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTransactionRequestComponent } from './employee-transaction-request.component';

describe('EmployeeTransactionRequestComponent', () => {
  let component: EmployeeTransactionRequestComponent;
  let fixture: ComponentFixture<EmployeeTransactionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeTransactionRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTransactionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
