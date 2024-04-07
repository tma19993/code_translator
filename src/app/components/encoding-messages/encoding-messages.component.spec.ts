import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodingMessagesComponent } from './encoding-messages.component';

describe('EncodingMessagesComponent', () => {
  let component: EncodingMessagesComponent;
  let fixture: ComponentFixture<EncodingMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncodingMessagesComponent]
    });
    fixture = TestBed.createComponent(EncodingMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
