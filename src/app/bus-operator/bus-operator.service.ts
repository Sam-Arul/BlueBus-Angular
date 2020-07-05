import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusOperatorService {

  constructor(private http:HttpClient) { }

  getOperatorName(email):Observable<any>{
    return this.http.get('http://localhost:3000/operator/getbusname/'+email);
  }
  operatorSignup(data):Observable<any>{
    return this.http.post('http://localhost:3000/operator/signup',data);
  }
  operatorLogin(data):Observable<any>{
    return this.http.post('http://localhost:3000/operator/login',data);
  }
  addBus(data):Observable<any>{
    return this.http.post('http://localhost:3000/operator/addbus',data);
  }
  deleteBus(regNo):Observable<any>{
    return this.http.delete('http://localhost:3000/operator/deletebus/' +regNo);
  }
  viewBuses(name):Observable<any>{
    return this.http.get('http://localhost:3000/operator/viewbuses/' + name);
  }
  cancelBusTicket(data,regNo):Observable<any>{
    return this.http.put('http://localhost:3000/bus/cancelseats/' + regNo,data);
  }
}
