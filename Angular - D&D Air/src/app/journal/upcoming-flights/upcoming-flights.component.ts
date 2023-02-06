import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FlightService } from 'src/app/all-flights/flight.service';
import { PopupComponent } from 'src/app/popup/popup.component';


@Component({
  selector: 'app-upcoming-flights',
  templateUrl: './upcoming-flights.component.html',
  styleUrls: ['./upcoming-flights.component.css']
})
export class UpcomingFlightsComponent {

  upcomingFlights:any;
  flightToCancel:any;
  response:any;
  totalPrice:any;
  flightDate:string[] = [];


  showFlights:Array<any> = [];

  constructor(public http: HttpClient, private flightService: FlightService, private router: Router, public matDialog: MatDialog){

    var usid = localStorage.getItem("id")

    const path = `http://localhost/API/getUpcomingFlights.php?id=${usid}`;

    this.upcomingFlights = http.get<any>(path).pipe(map(data => data))


    this.upcomingFlights.forEach( (value:any) => {

      for(let i =0; i < value.length; i++){

        console.log(value[i].flightstart);
        var day = new Date(Number(value[i].flightstart)).getDate();
        var month = new Date(Number(value[i].flightstart)).getMonth() + 1;
        var year = new Date(Number(value[i].flightstart)).getFullYear();
        this.flightDate[i]=[day,month,year ].join('/');


      }

    });


  }

  openDialog(id:any){
    this.matDialog.open(PopupComponent,
      {
        data : id
      }
      );


  }


  flightDetails(id : any){

    localStorage.setItem("flight_id", id);

    this.router.navigate(['/flightDetails', id])

  }



  // cancel flight fja
  // onSubmit(form : NgForm){

  //   const path = `http://localhost/API/getUserFlightsId.php?id=${id}`;

  //   this.flightToCancel = this.http.get<any>(path).pipe(map(data => data))

  //   proveriti kako ovo (da prosledjuje id umesto form data)

  //   this.flightService.cancelFlight(id).subscribe(
  //     res=>{

  //       console.log(res);

  //       this.response = res;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //     )



}

