import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { FlightService } from 'src/app/all-flights/flight.service';
import { UserService } from '../signup/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response="";

  arrayValue :any = [];

  users:any;

  userid:any;

  flightid:any;

  errorExistsEmail = false;

  errorExistsPassword = false;

  isFlightDetailsRouted = this.flightService.isFlightDetailsRouted;

  constructor(public http: HttpClient,  private router: Router, private appComponent : AppComponent,  private flightService: FlightService,  private userService: UserService) {


    const path = "http://localhost/API/getUsers.php";

    //Vadjenje svih usera iz baze
    this.users = http.get<any>(path).pipe(map(data => data))

  }

  ngOnInit(): void {

  }

  saveFlightId(flight_id : any){
    this.flightid = flight_id;
  }

onSubmit(form : NgForm){


  this.users.forEach( (value:any) => {

    for(let i =0; i < value.length; i++){

      if(form.value.email == value[i].email){
        if(form.value.password == value[i].password){
          console.log("Dobar email i password")

          this.errorExistsEmail = false;
          this.errorExistsPassword = false;

          localStorage.setItem("id", value[i].id);
          localStorage.setItem("recommend", value[i].destination);
          localStorage.setItem("username", value[i].name);


          console.log(localStorage.getItem("id"));




          //Cuvanje active usera

          this.userid = localStorage.getItem("id");

          const formData : FormData = new FormData();

          formData.append('userid', this.userid);

          this.userService.userSession(formData).subscribe(
            res=>{

              console.log(res);

              this.response = res;
            },
            err=>{
              console.log(err);
            }
            )

          //kraj cuvanja active usera

          if(this.flightService.isFlightDetailsRouted == true){
            this.appComponent.logingIn(1);
          }else{
            this.appComponent.logingIn(0);
          }

          break;
        }else{
          this.errorExistsEmail = false;
          this.errorExistsPassword = true;
          return;
        }
      }else{

        this.users.forEach( (value:any) => {
          console.log(value[i].email);
          return;
        });
        this.errorExistsEmail = true;
        this.errorExistsPassword = false;
      }

    }
  });


}


}
