import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // *ngfor example

staff = [
  { firstName: 'Tyler', lastName: 'Joseph', orders: 'Apple AirPods Pro', status: 'Shipped' },
  { firstName: 'Joshua', lastName: 'Dun', orders: 'Apple iPhone 15 Pro Max', status: 'Delivered' },
  { firstName: 'Taylor', lastName: 'Swift', orders: 'Apple MacBook Pro', status: 'Pending Payment' },
  { firstName: 'Billie', lastName: 'Eilish', orders: 'Apple Magic Keyboard', status: 'For Delivery' },
  { firstName: 'Noah', lastName: 'Kahan', orders: 'Apple USB-C Cable', status: 'Pending Shipment' }
  ];

}
