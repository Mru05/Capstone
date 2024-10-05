import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryTransactionReportComponent } from './beneficiary-transaction-report.component';

describe('BeneficiaryTransactionReportComponent', () => {
  let component: BeneficiaryTransactionReportComponent;
  let fixture: ComponentFixture<BeneficiaryTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeneficiaryTransactionReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
