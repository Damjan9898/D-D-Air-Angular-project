import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {

  cities:any;

  constructor(public http: HttpClient, private router: Router) {

  }

  ngOnInit(){
    const path = "http://localhost/API/getPopular.php";
      console.log(path);
      this.cities = this.http.get<any>(path).pipe(map(data => data))
  }


  popularCity(id:any){

    localStorage.setItem("popular_city_id", id);

    this.router.navigate(['/popularCity'])

  }


}
