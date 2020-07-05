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
     return this.http.get('http://localhost:3000/passenger/getusername/'+ email);
   }
   passengerSignup(data):Observable<any>{
     return this.http.post('http://localhost:3000/signup/passenger',data);
   }
   passengerLogin(data):Observable<any>{
     return this.http.post('http://localhost:3000/login/passenger',data);
   }
   searchBus(source,destination,date):Observable<any>{
     console.log(source,destination,date);
     return this.http.get('http://localhost:3000/passenger/getbusdetails/' + source + '/' + destination + '/' + date);
   }
   viewProfile(email):Observable<any>{
     return this.http.get('http://localhost:3000/passenger/viewprofile/' + email);
   }
   editProfile(data,email):Observable<any>{
     return this.http.put('http://localhost:3000/passenger/editprofile/'+ email,data);
   }
   viewTickets(email):Observable<any>{
     return this.http.get('http://localhost:3000/passenger/viewtickets/' + email);
   }
   bookTicket(data,email):Observable<any>{
     return this.http.put('http://localhost:3000/passenger/bookseats/' +email,data);
   }
   changeBusTicket(data,regNo):Observable<any>{
    return this.http.put('http://localhost:3000/bus/bookseats/' + regNo,data);
  }
   cancelTicket(data,email,id):Observable<any>{
     return this.http.put('http://localhost:3000/passenger/cancelseats/' + email + '/' + id,data);
   }
   cancelBusTicket(data,regNo):Observable<any>{
    return this.http.put('http://localhost:3000/bus/cancelseats/' + regNo,data);
  }
   getBusDetails(regNo):Observable<any>{
     return this.http.get('http://localhost:3000/passenger/getbusdetails/' + regNo);
   }
}
