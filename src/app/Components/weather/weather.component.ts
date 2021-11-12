import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

let currentTime = new Date().getHours();
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  weather: any;
  weatherToday: any;
  weatherTomorrow: any;
  greeting: string;

  constructor(private apiService: ApiService) {
    this.greeting = apiService.getGreeting(currentTime);
  }

  ngOnInit(): void {
    this.apiService.getWeather()
      .subscribe(
        response => {
          this.weather = response;
          this.weatherTomorrow = this.getTomorrowsWeather();
          this.weatherToday = this.getWeatherByTime(this.greeting);
        });
  };

  getTomorrowsWeather() {
    let weatherTomorrow = this.weather.properties.periods[3].shortForecast;
    return weatherTomorrow;
  }

  getWeatherByTime(greeting: string) {
    let weatherToday = this.weather.properties.periods[2].shortForecast;
    if (greeting == "Good morning!") {
      weatherToday = this.weather.properties.periods[0].shortForecast;
    } else if (greeting == "Good afternoon!") {
      weatherToday = this.weather.properties.periods[1].shortForecast;
    }
    return weatherToday;
  }
}
