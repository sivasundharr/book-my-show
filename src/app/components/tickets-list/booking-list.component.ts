import { Component } from '@angular/core';
import TicketData from 'src/app/model/TicketData';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {

  tickets:TicketData[];

  constructor(){
    this.tickets = [
      new TicketData(2,2,4,false,4,"2022-02-12","2022-10-12 12:10:23"),
      new TicketData(1,2,3,true,4,"2022-03-20","2022-10-12 12:10:23")
    ];  
  }


}
