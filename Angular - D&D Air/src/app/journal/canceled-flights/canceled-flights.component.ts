import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-canceled-flights',
  templateUrl: './canceled-flights.component.html',
  styleUrls: ['./canceled-flights.component.css']
})
export class CanceledFlightsComponent {

  flightDate:string[] = [];

  flights;
  constructor(public http: HttpClient){

    var usid = localStorage.getItem("id")

    const path = `http://localhost/API/getCanceledFlights.php?id=${usid}`;

    this.flights = http.get<any>(path).pipe(map(data => data));


    this.flights.forEach( (value:any) => {

      for(let i =0; i < value.length; i++){

        console.log(value[i].flightstart);
        var day = new Date(Number(value[i].flightstart)).getDate();
        var month = new Date(Number(value[i].flightstart)).getMonth() + 1;
        var year = new Date(Number(value[i].flightstart)).getFullYear();
        this.flightDate[i]=[day,month,year ].join('/');

      }

    });
  }
}
