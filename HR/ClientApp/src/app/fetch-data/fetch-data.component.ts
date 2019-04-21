import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../share/core.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(cor:CoreService) {
    cor.HttpGet('api/SampleData/WeatherForecasts').subscribe(res=>{
      this.forecasts = res;
    },error=>{

    })
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
