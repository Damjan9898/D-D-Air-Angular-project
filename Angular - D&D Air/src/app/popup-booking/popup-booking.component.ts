import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FlightService } from '../all-flights/flight.service';

@Component({
  selector: 'app-popup-booking',
  templateUrl: './popup-booking.component.html',
  styleUrls: ['./popup-booking.component.css']
})
export class PopupBookingComponent {

  popupData:any;
  response:any;
  flightDetails:any;
  flightDate:string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private data:any, public http: HttpClient, private router: Router, private flightService: FlightService){

    this.popupData = data;

    const path = `http://localhost/API/getFlightsId.php?id=${this.popupData.flight_id}`;

    this.flightDetails = this.http.get<any>(path).pipe(map(data => data))

    this.flightDetails.forEach( (value:any) => {

      for(let i =0; i < value.length; i++){

        var day = new Date(Number(value[i].flightstart)).getDate();
        var month = new Date(Number(value[i].flightstart)).getMonth() + 1;
        var year = new Date(Number(value[i].flightstart)).getFullYear();
        this.flightDate[i]=[day,month,year ].join('/');

      }

    });

  }


  book(id: any, seats:any){

    const formData : FormData = new FormData();

     var currentUser: any= localStorage.getItem("id")

     formData.append('flight_id', id)
     formData.append('user_id', currentUser)
      formData.append('seats_booked', seats)


    this.flightService.bookFlight(formData).subscribe(
      res=>{

        console.log(res);

        this.response = res;
      },
      err=>{
        console.log(err);
      }
      )



    this.router.navigate(['/journal'])






  }



}
