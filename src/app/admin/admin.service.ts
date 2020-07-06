import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  adminLogin(data):Observable<any>{
    return this.http.post('https://sam-blue-bus.herokuapp.com/admin/login',data);
  }
  listPendingOperator():Observable<any>{
    return this.http.get('https://sam-blue-bus.herokuapp.com/admin/approvaloperator');
  }
  actionPendingOperator(data,email,action):Observable<any>{
    return this.http.put('https://sam-blue-bus.herokuapp.com/admin/approvaloperator/' + email + '/' + action,data);
  }
  listPendingBuses():Observable<any>{
    return this.http.get('https://sam-blue-bus.herokuapp.com/admin/approvalbus');
  }
  actionPendingBuses(data,regNo,action):Observable<any>{
    console.log(regNo,action)
    return this.http.put('https://sam-blue-bus.herokuapp.com/admin/approvalbus/' + regNo + '/' + action,data);
  }
  deleteRejectedOperator(email,name):Observable<any>{
    return this.http.delete('https://sam-blue-bus.herokuapp.com/admin/deleteoperator/' + email + '/' + name);
  }
  deleteRejectedBus(regNo):Observable<any>{
    return this.http.delete('https://sam-blue-bus.herokuapp.com/admin/deletebus/' + regNo);
  }
}
