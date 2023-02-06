import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PopupBookingComponent } from 'src/app/popup-booking/popup-booking.component';
import { PopupComponent } from 'src/app/popup/popup.component';
import { FlightService } from '../flight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {

  flightDetail:any;

  flightDate:string[] = [];

  flightReturn:string[] = [];

  reviews:any;

  response:any;

  seats:any = 1;

  averageRating: number = 0;
  totalReviews : number = 0;
  ratingSum : number = 0;


  constructor(public http: HttpClient, private flightService: FlightService, private router: Router,  public matDialog: MatDialog, private route : ActivatedRoute) {




    var id = this.route.snapshot.paramMap.get('id');

    if(id){
      localStorage.setItem('flightid', id);
    }

    const path = `http://localhost/API/getFlightsId.php?id=${id}`;


    this.flightDetail = http.get<any>(path).pipe(map(data => data))

    //Za ispisivanje Date-a
    this.flightDetail.forEach( (value:any) => {


        console.log(value[0].flightstart);
        var day = new Date(Number(value[0].flightstart)).getDate();
        var month = new Date(Number(value[0].flightstart)).getMonth() + 1;
        var year = new Date(Number(value[0].flightstart)).getFullYear();
        this.flightDate[0]=[day,month,year ].join('/');



        var dayreturn = new Date(Number(value[0].flightstart)).getDate();
        var monthreturn = new Date(Number(value[0].flightstart)).getMonth() + 1;
        var yearreturn = new Date(Number(value[0].flightstart)).getFullYear();
        this.flightReturn[0]=[dayreturn,monthreturn,yearreturn ].join('/');

        console.log(this.flightReturn[0]);






    });


    const path1 = `http://localhost/API/getFlightReviews.php?id=${id}`;

    this.reviews = http.get<any>(path1).pipe(map(data => data));

    this.reviews.forEach( (value:any) => {

      this.totalReviews = Number(value.length);

      for(let i = 0; i < value.length; i++){

        this.ratingSum = Number(this.ratingSum) + Number(value[i].rating);

        if( i == (value.length - 1)){
          this.averageRating = Math.round((Number(this.ratingSum)/Number(this.totalReviews)) * 10) / 10;
        }

      }

    });





  }


  passengers(num : number){
    const passengers = document.getElementById('passengers') as HTMLInputElement | null;
    const valuePassengers = Number(passengers?.value);

    if(passengers != null && valuePassengers != null){
      if((Number(valuePassengers) + Number(num)) != 0){
        passengers.value = String(Number(valuePassengers) + Number(num));
        this.seats=passengers.value
      }

    }


  }

  openDialog(id:any){
    if(localStorage.getItem("id")){
    this.matDialog.open(PopupBookingComponent,
      {
        data : {flight_id: id, seats: this.seats},
      }
      );} else {
        this.router.navigate(['/login'])
        this.flightService.isFlightDetailsRouted = true;
      }


  }

}


