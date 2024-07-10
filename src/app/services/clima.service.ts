import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {


  API_key='d0961d8a994920ba4e9b0b9ab600c8ca'

  constructor( private http:HttpClient) {

  }

  getClima(ciudad:string):Observable<any>{

    http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city},${this.province},${this.country}
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.API_key}`);

}
}
