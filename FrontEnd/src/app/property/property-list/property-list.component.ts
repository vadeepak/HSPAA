import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
         "Id":1,
         "Name":"Birla House",
         "Type":"House",
         "Price":12000
    },
    {
      "Id":2,
      "Name":"Virat House",
      "Type":"House",
      "Price":22000
    },
    {
  "Id":3,
  "Name":"Yuvi House",
  "Type":"House",
  "Price":19000
},
{
  "Id":4,
  "Name":"Mahi House",
  "Type":"House",
  "Price":16000
},
{
  "Id":5,
  "Name":"Sehwag House",
  "Type":"House",
  "Price":14000
},
{
  "Id":5,
  "Name":"Sachin House",
  "Type":"House",
  "Price":11000
}
  ]

  constructor() { }

  ngOnInit(){
  }

}
