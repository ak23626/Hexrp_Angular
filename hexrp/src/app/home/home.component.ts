import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  breakpointnews: number;
  constructor(private HttpApiService: HttpApiService) { }

  ngOnInit(){
    this.breakpointnews = (window.innerWidth <= 400) ? 1 : (window.innerWidth > 401 && window.innerWidth < 810) ? 2 : 4;

    console.log(this.HttpApiService.sendGetRequest());
  }

  onResizeNewsBox(event) {
    this.breakpointnews = (event.target.innerWidth <= 400) ? 1 : (event.target.innerWidth > 401 && event.target.innerWidth < 810) ? 2 : 4;
    
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  } 
}
