import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: []
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: []
      }
    ]
  }

  subscription: Subscription;


  breakpoint: number;
  breakpointnews: number;
  breakpointgraph: number;
  news_data: any[];
  constructor(private HttpApiService: HttpApiService) { }

  ngOnInit(){

    const source = interval(10000);

    // Sample API
    const apiLink = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1';

    this.subscription = source.subscribe(val => this.HttpApiService.getApiResponse(apiLink).then(
      data => {
        const updated_normal_data = [];
        const updated_abnormal_data = [];
        data.forEach(row => {
          const temp_row = [
            new Date(row.timestamp).getTime(),
            row.value
          ];
          row.Normal === 1 ? updated_normal_data.push(temp_row) : updated_abnormal_data.push(temp_row);
        });
        this.options.series[0]['data'] = updated_normal_data;
        this.options.series[1]['data'] = updated_abnormal_data;
        Highcharts.chart('container', this.options);
      },
      error => {
        console.log('Something went wrong.');
      })
    );

    



    this.breakpointnews = (window.innerWidth <= 500) ? 1 : (window.innerWidth > 501 && window.innerWidth < 810) ? 2 : 4;
    
    this.breakpointgraph = (window.innerWidth <= 500) ? 1 : 2;

    this.HttpApiService.sendGetRequest().subscribe((data: any[])=>{
    console.log(data);
    this.news_data = data;  
    });
  }

  onResizeNewsBox(event) {
    this.breakpointnews = (event.target.innerWidth <= 500) ? 1 : (event.target.innerWidth > 501 && event.target.innerWidth < 810) ? 2 : 4;
    
  }
  onResizegraphBox(event) {
    this.breakpointgraph = (window.innerWidth <= 500) ? 1 : 2;
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  } 


}
