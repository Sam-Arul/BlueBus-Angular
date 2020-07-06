import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
passengerDetails;
  constructor(private http:HttpClient) {
    
   }
   getUserName(email){
     return this.http.get('https://sam-blue-bus.herokuapp.com/passenger/getusername/'+ email);
   }
   passengerSignup(data):Observable<any>{
     return this.http.post('https://sam-blue-bus.herokuapp.com/signup/passenger',data);
   }
   passengerLogin(data):Observable<any>{
     return this.http.post('https://sam-blue-bus.herokuapp.com/login/passenger',data);
   }
   searchBus(source,destination,date):Observable<any>{
     console.log(source,destination,date);
     return this.http.get('https://sam-blue-bus.herokuapp.com/passenger/getbusdetails/' + source + '/' + destination + '/' + date);
   }
   viewProfile(email):Observable<any>{
     return this.http.get('https://sam-blue-bus.herokuapp.com/passenger/viewprofile/' + email);
   }
   editProfile(data,email):Observable<any>{
     return this.http.put('https://sam-blue-bus.herokuapp.com/passenger/editprofile/'+ email,data);
   }
   viewTickets(email):Observable<any>{
     return this.http.get('https://sam-blue-bus.herokuapp.com/passenger/viewtickets/' + email);
   }
   bookTicket(data,email):Observable<any>{
     return this.http.put('https://sam-blue-bus.herokuapp.com/passenger/bookseats/' +email,data);
   }
   changeBusTicket(data,regNo):Observable<any>{
    return this.http.put('https://sam-blue-bus.herokuapp.com/bus/bookseats/' + regNo,data);
  }
   cancelTicket(data,email,id):Observable<any>{
     return this.http.put('https://sam-blue-bus.herokuapp.com/passenger/cancelseats/' + email + '/' + id,data);
   }
   cancelBusTicket(data,regNo):Observable<any>{
    return this.http.put('https://sam-blue-bus.herokuapp.com/bus/cancelseats/' + regNo,data);
  }
   getBusDetails(regNo):Observable<any>{
     return this.http.get('https://sam-blue-bus.herokuapp.com/passenger/getbusdetails/' + regNo);
   }
}
