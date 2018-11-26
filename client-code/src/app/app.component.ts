import { Router, ActivatedRoute } from '@angular/router';
import { DataApiService } from './services/data-api.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  authenticated: Boolean;
  constructor(private dataService: DataApiService) {
  }

  ngOnInit() {

  }

}
