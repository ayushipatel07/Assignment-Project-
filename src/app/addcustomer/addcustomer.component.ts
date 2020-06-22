import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../Icustome';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  id =1;
  customerform: FormGroup;
  customerData : any;
  customers : Customer[];
  data : any={};
constructor(private customerservice : CustomerService, public  router : Router) {}


addCustomer() {
  let customer: Customer
  customer = this.customerform.value
  customer.id = this.id
    this.customerservice.addCustomer(customer).subscribe();
  this.router.navigate(['/CustomerList']);
}

back() {
  this.customerform.reset();
  this.router.navigate(['/CustomerList']);
}

ngOnInit() {

  this.customerform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl(),
    state: new FormControl()
  });

  this.customerservice.getAllCustomers()
    .subscribe(
      customer => {
        this.id = customer.length + 1
      }
    );
}
}
