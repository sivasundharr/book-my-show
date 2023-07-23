import { Component, Input } from '@angular/core';
import BookingData from 'src/app/model/BookingData';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  @Input("booking") booking = {};
}
