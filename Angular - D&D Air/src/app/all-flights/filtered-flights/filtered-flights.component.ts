
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FilteredDataService } from '../../filteredData.service';



@Component({
  selector: 'app-filtered-flights',
  templateUrl: './filtered-flights.component.html',
  styleUrls: ['./filtered-flights.component.css']
})
export class FilteredFlightsComponent {

  message:string = "";
  flights:any;
  filteredFlights:any = "";

  arrayUsers : Array<any> = [];

  constructor(public http: HttpClient,private filteredData : FilteredDataService, private router: Router){

  }

  ngOnInit(){

    this.filteredData.currentMessage.subscribe(message => this.message = message)

    console.log(this.message);

    if(this.message != "Default message"){
      const path = this.message;
      console.log(path);
      this.flights = this.http.get<any>(path).pipe(map(data => data))
    }else{

      var airline = localStorage.getItem("airline");
      var locationstart = localStorage.getItem("locationstart");
      var locationend = localStorage.getItem("locationend");
      var classflight = localStorage.getItem("classflight");
      var flightstart = localStorage.getItem("flightstart");



      const path = `http://localhost/API/getFilteredFlights.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
      console.log(path);
      this.flights = this.http.get<any>(path).pipe(map(data => data))
    }


    }

    onSubmit(form : NgForm){

      console.log(form.value.sort)
      // this.flights // menjamo u odnosu na argument

      var airline = localStorage.getItem("airline");
      var locationstart = localStorage.getItem("locationstart");
      var locationend = localStorage.getItem("locationend");
      var classflight = localStorage.getItem("classflight");
      var flightstart = localStorage.getItem("flightstart");

      // sortiramo po : price, duzinaLeta, brojPreostalihMesta i za svaki ASC i DESC
      if(form.value.sort == "priceAsc"){
        const path = `http://localhost/API/sortByPriceAsc.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
        this.flights = this.http.get<any>(path).pipe(map(data => data))
      }else if(form.value.sort == "priceDesc"){
        const path = `http://localhost/API/sortByPriceDesc.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
        this.flights = this.http.get<any>(path).pipe(map(data => data))
      }else if(form.value.sort == "seatsAsc"){
        const path = `http://localhost/API/sortBySeatsAsc.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
        this.flights = this.http.get<any>(path).pipe(map(data => data))
      }else if(form.value.sort == "seatsDesc"){
        const path = `http://localhost/API/sortBySeatsDesc.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
        this.flights = this.http.get<any>(path).pipe(map(data => data))
      }else if(form.value.sort == "distanceAsc"){
        const path = `http://localhost/API/sortByDistanceAsc.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
        this.flights = this.http.get<any>(path).pipe(map(data => data))
      }else if(form.value.sort == "distanceDesc"){
        const path = `http://localhost/API/sortByDistanceDesc.php?airline=${airline}&locationstart=${locationstart}&locationend=${locationend}&classflight=${classflight}&flightstart=${flightstart}`;
        this.flights = this.http.get<any>(path).pipe(map(data => data))
      }
      //itd
    }


    flightDetails(id : any){

      localStorage.setItem("flight_id", id);

      this.router.navigate(['/flightDetails', id])

    }


}


