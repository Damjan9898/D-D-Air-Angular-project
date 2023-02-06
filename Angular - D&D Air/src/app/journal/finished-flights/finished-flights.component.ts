import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FlightService } from 'src/app/all-flights/flight.service';

@Component({
  selector: 'app-finished-flights',
  templateUrl: './finished-flights.component.html',
  styleUrls: ['./finished-flights.component.css']
})
export class FinishedFlightsComponent {

  flights;
  response:any;
  users:any;
  hasCommented=false;
  rateSar:string = "1";


  flightDate:string[] = [];


  constructor(public http: HttpClient, private flightService: FlightService){


    var usid = localStorage.getItem("id")


    const path = `http://localhost/API/getFinishedFlights.php?id=${usid}`;

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

  onSubmit(form : NgForm, name:any, flight_id:any, user_flight_id:any){

    const formDataGivenReview : FormData = new FormData();
    const formData : FormData = new FormData();


    formData.append('rating', this.rateSar)
    formData.append('comment', form.value.review)
    formData.append('name', name)
    formData.append('flight_id', flight_id)

    //Za update given comment
    formDataGivenReview.append('user_flight_id', user_flight_id)



    this.flightService.leaveReview(formData).subscribe(
      res=>{

        console.log(res);

        this.response = res;
      },
      err=>{
        console.log(err);
      }
      );


      this.flightService.givenReview(formDataGivenReview).subscribe(
        res=>{

          console.log(res);

          this.response = res;
        },
        err=>{
          console.log(err);
        }
        );




        window.location.reload();


  }


  rate(starNumber: number, index: number){

    var ratingBlockByIndex = document.getElementsByClassName('rating_blk')[index];

    console.log(index);


    var star = ratingBlockByIndex.getElementsByClassName('star');

    if (star != null) {

        for(let i = 0; i < star.length; i++){
              if(i < starNumber){
                star[i].classList.add('checked');
              }else{
                star[i].classList.remove('checked');
              }
        }

    }
    this.rateSar = String(starNumber);




  }

}
