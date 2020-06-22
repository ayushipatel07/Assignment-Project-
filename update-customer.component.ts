import { Component, OnInit } from '@angular/core';
import { Customer } from '../Icustome';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
   
  customers : Customer;
  idtodelete=1;
  data : any = {};
  updateform : FormGroup;
  idtoUpdate = 1;

  constructor( private customerservice : CustomerService, private router : Router, private route : ActivatedRoute) { }
 
  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }
  // deleteCustomer() {
  //   this.customerservice.deleteCustomer(this.idtodelete).subscribe(data => {
  //      this.customers = data;
  //      console.log("Record Deleted", this.customers);
      
  //   });
  //   this.route.navigate['/customer-list'];
  // }

 
  // updateCustomers() {
  //   this.customerservice.updateCustomer(this.updateform.value).subscribe(data => {
  //     this.customers = data;
  //     console.log("Customer Updated",this.customers);
  //     });
  //     this.route.navigate['/customer-list'];
  // }
  
  // updateCustomerData() {
  //   this.customerservice.updateCustomer(this.customers).subscribe();
  //   this.router.navigate(['/customer-list']);
  // }
  updateCustomerData() {
    this.customerservice.updateCustomer(this.customers).subscribe();
    this.router.navigate(['/CustomerList']);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customers = JSON.parse(params.data) as Customer;
    });
      this.updateform = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    });

    this.updateform.patchValue({
      
      firstName: this.customers.firstName,
      lastName: this.customers.lastName,
      gender: this.customers.gender,
      address: this.customers.address,
      city: this.customers.city,
      state : this.customers.state,
     });
    this.onChanges();
  }

  onChanges(): void {

    this.updateform.valueChanges.subscribe(val => {
      this.customers.firstName = val.firstName;
      this.customers.lastName = val.lastName;
      this.customers.gender = val.gender;
      this.customers.address = val.address;
      this.customers.city = val.city;
     this.customers.state = val.state;
    })
  }

  deleteCustomer() {
    alert("are you sure, you want to delete");
    this.customerservice.deleteCustomer(this.customers.id).subscribe();
    this.router.navigate(['/CustomerList']);
  }
  goback() 
  {
    this.updateform.reset();
    this.router.navigate(['/CustomerList']);
  }


}


