import { Component } from '@angular/core';
import BookingData from 'src/app/model/BookingData';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {

  bookings:BookingData[];

  constructor(){
    this.bookings = [
      new BookingData(2,2,4,false,4,"2022-02-12","2022-10-12 12:10:23"),
      new BookingData(1,2,3,true,4,"2022-03-20","2022-10-12 12:10:23")
    ];  
  }


}
