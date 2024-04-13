import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStepByStepComponent } from './text-step-by-step.component';

describe('TextStepByStepComponent', () => {
  let component: TextStepByStepComponent;
  let fixture: ComponentFixture<TextStepByStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextStepByStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextStepByStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
