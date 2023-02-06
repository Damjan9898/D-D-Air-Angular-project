import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-popular-city',
  templateUrl: './popular-city.component.html',
  styleUrls: ['./popular-city.component.css']
})
export class PopularCityComponent {

  popular_cities:any;


  constructor(public http: HttpClient){

    var id = localStorage.getItem("popular_city_id")
    console.log("ID od grada" + id)

    const path = `http://localhost/API/getPopularId.php?id=${id}`;


    this.popular_cities = http.get<any>(path).pipe(map(data => data))


  }

}
