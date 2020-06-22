import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Customer } from '../Icustome';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  customers: Customer[];
  customerFilter : string;
  User_avatar : string = "assets/User_avatar.png";
  customerForm : any;

  constructor(private customerservice : CustomerService, private router : Router){}
  
  ngOnInit(): void {
    this.customerservice.getAllCustomers()
      .subscribe(
        customer => {
          this.customers = customer;
        }
      );
     console.log("Data",this.customers);
  }

  addCustomer() {
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer() {
    this.router.navigate(['/updateCustomer']);
  }

  orderTotal(order: { productName: string, itemCost: number }[]) {
    if (order == null || order == undefined)
      return 0;
    let totalOrderCost: number = 0;
    for (let i = 0; i < order.length; i++) {
      totalOrderCost += order[i].itemCost;
    }
    return totalOrderCost;
  }  
}
