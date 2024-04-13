import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryStepByStepComponent } from './binary-step-by-step.component';

describe('BinaryStepByStepComponent', () => {
  let component: BinaryStepByStepComponent;
  let fixture: ComponentFixture<BinaryStepByStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryStepByStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinaryStepByStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
