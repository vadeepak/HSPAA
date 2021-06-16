import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { Iproperty } from '../IProperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Iproperty> =[];
  constructor(private housingservice: HousingService) {

  }

  ngOnInit(){
     this.housingservice.getAllProperties()
              .subscribe(
                data =>{
                  this.properties = data;
                }
              )
  }

}
