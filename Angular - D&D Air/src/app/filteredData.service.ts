import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class FilteredDataService{

  private messageSource = new BehaviorSubject<string>("Default message");
  currentMessage = this.messageSource.asObservable();


  constructor(){}

  changeMessage(message : string){
    this.messageSource.next(message);
  }


}
