import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: '',redirectTo: '/CustomerList',pathMatch: 'full'},
  {path: 'CustomerList',component: CustomerListComponent},
  {path: 'addcustomer',component: AddcustomerComponent},
  {path: 'updateCustomer',component: UpdateCustomerComponent},
  // { path: '**', component: CustomersComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
