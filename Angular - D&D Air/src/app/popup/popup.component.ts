import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../all-flights/flight.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  popupData:any;

  constructor(@Inject(MAT_DIALOG_DATA) private data:any, private flightService: FlightService){

    this.popupData = data;

  }

  cancelFlight(userFlightId:any){

    const formData : FormData = new FormData();

    formData.append('user_flight_id', userFlightId)

    this.flightService.cancelFlight(formData).subscribe(
      res=>{

        console.log(res);

      },
      err=>{
        console.log(err);
      }
      )


      window.location.reload();




  }




}
