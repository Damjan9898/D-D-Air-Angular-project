import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  response="";
  users;


  accountExists = false;

  constructor(public http: HttpClient,  private userService: UserService, private router: Router) {




  const path = "http://localhost/API/getUsers.php";

  //Vadjenje svih usera iz baze
  this.users = http.get<any>(path).pipe(map(data => data))
  }

  ngOnInit(): void {

  }

  onSubmit(form : NgForm){
//Provera jel vec postoji nalog
this.users.forEach( (value:any) => {

  for(let i =0; i < value.length; i++){

    if(form.value.email == value[i].email){
      this.accountExists = true;

      return;
    }

  }
  this.finalSubmit(form);
});
  }

  finalSubmit(form : NgForm){

    const formData : FormData = new FormData();

    formData.append('name', form.value.name)
    formData.append('surname', form.value.surname)
    formData.append('address', form.value.address)
    formData.append('telephone', form.value.telephone)
    formData.append('email', form.value.email)
    formData.append('password', form.value.password)
    formData.append('destination', form.value.destination)

    this.userService.onSendService(formData).subscribe(
      res=>{

        console.log(res);

        this.response = res;
      },
      err=>{
        console.log(err);
      }
      )

      this.router.navigate(['/login'])

  }


}

