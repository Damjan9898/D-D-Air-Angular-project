import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UserService } from '../signup/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit
{
  isEditing = false;
  users:any;
  currentUser : any = localStorage.getItem("id");
  response="";

  constructor(public http: HttpClient,  private userService: UserService){


  }

  ngOnInit():void{

    var id = localStorage.getItem("id");

    this.currentUser = id;

    const path = `http://localhost/API/getUserId.php?id=${id}`;

    //Izvlacimo sve usere iz baze
    this.users = this.http.get<any>(path).pipe(map(data => data))
    console.log(this.users)


  }

  onSubmit(form : NgForm){

    const formData : FormData = new FormData();

    formData.append('id', this.currentUser)
    formData.append('name', form.value.name)
    formData.append('surname', form.value.surname)
    formData.append('address', form.value.address)
    formData.append('telephone', form.value.telephone)
    formData.append('email', form.value.email)
    formData.append('password', form.value.password)
    formData.append('destination', form.value.destination)

    this.isEditing = false;

    this.userService.onUpdateService(formData).subscribe(
      res=>{

        console.log(res);

        this.response = res;
      },
      err=>{
        console.log(err);
      }
      )



  }




}


