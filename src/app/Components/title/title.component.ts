import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

let currentTime = new Date().getHours();
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit {
  greeting?: string;

  constructor(private apiService: ApiService) {
    this.greeting = apiService.getGreeting(currentTime);
  }

  ngOnInit(): void {
  }

}
