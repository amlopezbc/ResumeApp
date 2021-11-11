import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
