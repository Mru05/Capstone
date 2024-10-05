import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryTransactionRequestComponent } from './beneficiary-transaction-request.component';

describe('BeneficiaryTransactionRequestComponent', () => {
  let component: BeneficiaryTransactionRequestComponent;
  let fixture: ComponentFixture<BeneficiaryTransactionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeneficiaryTransactionRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryTransactionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
