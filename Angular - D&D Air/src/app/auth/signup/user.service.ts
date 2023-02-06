
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService{

  currentId:any;
  constructor(private http:HttpClient){

  }

  onSendService(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/setUsers.php', formData)
  }

  onUpdateService(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/updateUsers.php', formData)
  }

  userSession(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/userSession.php', formData)
  }

  logout(formData: FormData): Observable<any>{
    return this.http.post<any>('http://localhost/API/logout.php', formData)
  }

}
