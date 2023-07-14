import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookingFormComponent } from './ticket-booking-form.component';

describe('TicketBookingFormComponent', () => {
  let component: TicketBookingFormComponent;
  let fixture: ComponentFixture<TicketBookingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketBookingFormComponent]
    });
    fixture = TestBed.createComponent(TicketBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
