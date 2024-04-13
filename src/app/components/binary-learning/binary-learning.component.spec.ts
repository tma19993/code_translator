import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryLearningComponent } from './binary-learning.component';

describe('BinaryLearningComponent', () => {
  let component: BinaryLearningComponent;
  let fixture: ComponentFixture<BinaryLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinaryLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
