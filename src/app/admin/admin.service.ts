import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  adminLogin(data):Observable<any>{
    return this.http.post('http://localhost:3000/admin/login',data);
  }
  listPendingOperator():Observable<any>{
    return this.http.get('http://localhost:3000/admin/approvaloperator');
  }
  actionPendingOperator(data,email,action):Observable<any>{
    return this.http.put('http://localhost:3000/admin/approvaloperator/' + email + '/' + action,data);
  }
  listPendingBuses():Observable<any>{
    return this.http.get('http://localhost:3000/admin/approvalbus');
  }
  actionPendingBuses(data,regNo,action):Observable<any>{
    console.log(regNo,action)
    return this.http.put('http://localhost:3000/admin/approvalbus/' + regNo + '/' + action,data);
  }
  deleteRejectedOperator(email,name):Observable<any>{
    return this.http.delete('http://localhost:3000/admin/deleteoperator/' + email + '/' + name);
  }
  deleteRejectedBus(regNo):Observable<any>{
    return this.http.delete('http://localhost:3000/admin/deletebus/' + regNo);
  }
}
