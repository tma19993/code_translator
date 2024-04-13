import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLearningComponent } from './text-learning.component';

describe('TextLearningComponent', () => {
  let component: TextLearningComponent;
  let fixture: ComponentFixture<TextLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
