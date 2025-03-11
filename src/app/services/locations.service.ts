import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, tap } from 'rxjs';
import { Location } from '../interfaces/location';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.nicobytes.store/api/v1/locations';
  //http = inject(HttpClient);

  getLocation(){
    return this.http.get<Location[]>(`${this.baseUrl}`)
    .pipe(
      delay(1000),
      tap(data => console.log('API Response:', data)) 
    )
 
  }



}
