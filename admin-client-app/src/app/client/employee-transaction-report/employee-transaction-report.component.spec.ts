import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTransactionReportComponent } from './employee-transaction-report.component';

describe('EmployeeTransactionReportComponent', () => {
  let component: EmployeeTransactionReportComponent;
  let fixture: ComponentFixture<EmployeeTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeTransactionReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
