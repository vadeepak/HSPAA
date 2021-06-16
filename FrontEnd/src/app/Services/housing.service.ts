import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iproperty } from '../property/IProperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties() : Observable<Iproperty[]>{
      return this.http.get('Data/properties.json')
          .pipe(
            map( data => {
              const jsonData = JSON.stringify(data)
              const propertiesArray: Array<Iproperty> = JSON.parse(jsonData);;
              return propertiesArray;
            })
          );
  }
}
