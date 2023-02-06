
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { FilteredDataService } from '../filteredData.service';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

@Injectable({ providedIn: 'root' })
export class WelcomeComponent implements OnInit{
  users:any;
  message:string | undefined;
  isLoggedIn = false;
 //Autocomplete
  myControl = new FormControl('');
  options: string[] = ["Belgrade", "New York", "Berlin", "Moscow", "Paris"];
  filteredOptions: Observable<string[]> | undefined;

  myControl1 = new FormControl('');
  options1: string[] = ["Belgrade", "New York", "Berlin", "Moscow", "Paris"];
  filteredOptions1: Observable<string[]> | undefined;

  constructor(public http: HttpClient, private filteredData : FilteredDataService, private router: Router) {


    const from = document.getElementById('from') as HTMLInputElement | null;



  }

  ngOnInit(){

    //Autocomplete
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value || '')),
    );

      this.filteredData.currentMessage.subscribe(message => this.message = message);


    if(localStorage.getItem("id")){
        this.isLoggedIn= true;
      }else{
        this.isLoggedIn= false;
      }

  }

  //Funkcije za autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue1 = value.toLowerCase();

    return this.options1.filter(option => option.toLowerCase().includes(filterValue1));
  }

  logingIn(num : Number){
    this.isLoggedIn= true;
    if(num == 1){

      let flightid = localStorage.getItem("flightid");
      window.location.href=`http://localhost:4200/flightDetails/${flightid}`


    }else{
      window.location.href='http://localhost:4200/'
    }

  }
  logOut(){
    this.isLoggedIn= false;
    window.location.href='http://localhost:4200/login'
  }




  onSubmit(form: NgForm){

    var airline = form.value.airline;

    const from = document.getElementById('from') as HTMLInputElement | null;
    const to = document.getElementById('to') as HTMLInputElement | null;
    const valueFrom = String(from?.value);
    const valueTo = String(to?.value);
    var locationstart = valueFrom;
    var locationend = valueTo;

    var classflight = form.value.classflight;

    //Prebacivanje datuma u string
    var flightstartString = form.value.flightstart;
    var flightstart = flightstartString.getTime();



    //Cuvanje vrednosti u localstorage kada refreshujem stranicu filtered data
    localStorage.setItem("airline", airline);
    localStorage.setItem("locationstart", locationstart);
    localStorage.setItem("locationend", locationend);
    localStorage.setItem("classflight", classflight);
    localStorage.setItem("flightstart", flightstart);






    const path = `http://localhost/API/getFilteredFlights.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;


    this.filteredData.changeMessage(path);
    this.router.navigate(['/filtered'])

  }


// Menjanje Destinacija FROM i TO
  reverceDestination(){
    const from = document.getElementById('from') as HTMLInputElement | null;

    const to = document.getElementById('to') as HTMLInputElement | null;

    const valueFrom = from?.value;
    const valueTo = to?.value;


    if(from != null && valueTo != null && to != null && valueFrom != null){
      from.value = valueTo;
      to.value = valueFrom;
    }

  }


}


