import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDisburseComponent } from './salary-disburse.component';

describe('SalaryDisburseComponent', () => {
  let component: SalaryDisburseComponent;
  let fixture: ComponentFixture<SalaryDisburseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaryDisburseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDisburseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
