import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';
  }

  getWeather() {
    let report = this.http.get(this.apiUrl);
    return report;
  }

  public getGreeting(currentTime: Number) {
    let greeting = "Good morning!";
    if (currentTime > 12) {
      greeting = "Good afternoon!";
      if (currentTime > 18) {
        greeting= "Good evening!";
        if (currentTime > 22) {
          greeting = "Good night!";
        }
      }
    }
    return greeting;
  }
}
