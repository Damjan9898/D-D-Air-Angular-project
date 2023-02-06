import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-recommended-flights',
  templateUrl: './recommended-flights.component.html',
  styleUrls: ['./recommended-flights.component.css']
})
export class RecommendedFlightsComponent {
    flights;

    flightDate:string[] = [];

    recommended = localStorage.getItem("recommend");

    constructor(public http: HttpClient, private router: Router) {

    console.log(localStorage.getItem("recommend"));

    const path = `http://localhost/API/getFlightsRecommend.php?locationend=${this.recommended}`;


    this.flights = http.get<any>(path).pipe(map(data => data))


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



    flightDetails(id : any){

      localStorage.setItem("flight_id", id);

      this.router.navigate(['/flightDetails', id])

    }




  }
