import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryCrudeComponent } from './beneficiary-crude.component';

describe('BeneficiaryCrudeComponent', () => {
  let component: BeneficiaryCrudeComponent;
  let fixture: ComponentFixture<BeneficiaryCrudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeneficiaryCrudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryCrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
