import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearingComponent } from './learing.component';

describe('LearingComponent', () => {
  let component: LearingComponent;
  let fixture: ComponentFixture<LearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
