import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  isFlightDetailsRouted = false;

  
  constructor(private http:HttpClient) { }

  bookFlight(formData: FormData): Observable<any>{
    return this.http.post<any>(`http://localhost/API/bookFlight.php`, formData)

  }

  cancelFlight(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/cancelFlight.php', formData)
  }

  leaveReview(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/leaveReview.php', formData)
  }

  givenReview(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/updateGivenReview.php', formData)
  }
}
