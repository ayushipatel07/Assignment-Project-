import { Customer } from './ICustome';
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  private base_url = 'api/customers';

 getAllCustomers():Observable<Customer[]>{
    return  this.http.get<Customer[]>(this.base_url)
    .pipe(tap(),
            )
  }

  addCustomer(customer:Customer){
    return this.http.post(this.base_url,customer)
    .pipe(
      tap());
  }

  deleteCustomer(customerId){
    return this.http.delete(this.base_url+"/"+customerId)
    .pipe(
      tap());
  }

  updateCustomer(customer:Customer):Observable<number>{
    let httpHeaders = new HttpHeaders({
      'content-Type' : 'application/json'
    });
    return this.http.put<Customer>(this.base_url+"/"+customer.id,customer,{
      headers: httpHeaders,
      observe: 'response'
    })
    .pipe(
      map(res=>res.status),
    );
  }
}