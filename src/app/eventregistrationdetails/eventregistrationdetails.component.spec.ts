import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregistrationdetailsComponent } from './eventregistrationdetails.component';

describe('EventregistrationdetailsComponent', () => {
  let component: EventregistrationdetailsComponent;
  let fixture: ComponentFixture<EventregistrationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventregistrationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventregistrationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
