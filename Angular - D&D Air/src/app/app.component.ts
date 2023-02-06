import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { FlightService } from './all-flights/flight.service';
import { UserService } from './auth/signup/user.service';
import { FilteredDataService } from './filteredData.service';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  http: any;

  message:string | undefined;
  users:any;
  currentUser:any;
  isLoggedIn = false;
  userName: string | null = "";

  response:any;



  constructor(http: HttpClient, private filteredData : FilteredDataService, private router: Router, private welcomeComponent : WelcomeComponent, private flightService: FlightService, private userService: UserService){

    const path = "http://localhost/API/getUsers.php";

    //API na vraca encodovani JSON, ovih ga dekodujemo
    this.users = http.get<any>(path).pipe(map(data => data))



    if(localStorage.getItem("id")){
      this.isLoggedIn= true;
      console.log('ulogovan')
    }else{
      this.isLoggedIn= false;
      console.log('nije ulogovan')
    }

    }




    ngOnInit(){
      this.filteredData.currentMessage.subscribe(message => this.message = message)



      this.users.forEach( (value:any) => {

        for(let i =0; i < value.length; i++){

          if(localStorage.getItem("id") == value[i].id){

            this.currentUser=value[i];
            this.userName = value[i].name;
          }

        }

      });
    }

    logOut():void{

      //Brisanje aktivnog usera
      let userid : any;

          userid = localStorage.getItem("id");

          const formData : FormData = new FormData();

          formData.append('userid', userid);

          this.userService.logout(formData).subscribe(
            res=>{

              console.log(res);

              this.response = res;
            },
            err=>{
              console.log(err);
            }
            )

      localStorage.removeItem("chat_session");

      localStorage.removeItem("id")
      this.isLoggedIn= false;
      this.welcomeComponent.logOut();
      this.flightService.isFlightDetailsRouted = false
      this.router.navigate(['/login'])

    }

    logingIn(num : Number){
      this.isLoggedIn= true;
      this.userName = localStorage.getItem("username");
      this.welcomeComponent.logingIn(num);
    }

  }







