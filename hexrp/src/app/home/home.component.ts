import { Component, OnInit, Input } from '@angular/core';
import {HttpApiService} from '../http-api.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  chartOptions_btc: {};
  chartOptions_eth: {};
  chartOptions_xrp: {};
  chartOptions_btcash: {};
  chartOptions_eos: {};
  chartOptions_card: {};
  chartOptions_ltc: {};
  chartOptions_st: {};
  chartOptions_bnc: {};
  Highcharts = Highcharts;  

  subscription: Subscription;


  breakpoint: number;
  breakpointnews: number;
  breakpointgraph: number;
  news_data: any[];
  breakpointaboutus: any;

  constructor(private HttpApiService: HttpApiService) { }

  ngOnInit(){

    const source = interval(10000);

     this.HttpApiService.getGraphBitcoin("bitcoin").subscribe((data:any[])=>{
       
     this.chartOptions_btc =this.highchart(data["prices"],"Bitcoin");
          HC_exporting(Highcharts);

     });
    
     this.HttpApiService.getGraphBitcoin("ethereum").subscribe((data:any[])=>{
       
     this.chartOptions_eth =this.highchart(data["prices"],"Ethereum");
          HC_exporting(Highcharts);
     });

     this.HttpApiService.getGraphBitcoin("ripple").subscribe((data:any[])=>{
       
     this.chartOptions_xrp =this.highchart(data["prices"],"Ripple");
          HC_exporting(Highcharts);
     });
    this.HttpApiService.getGraphBitcoin("bitcoin-cash").subscribe((data:any[])=>{
       
     this.chartOptions_btcash =this.highchart(data["prices"],"Bitcoin Cash");
          HC_exporting(Highcharts);
     });
    this.HttpApiService.getGraphBitcoin("eos").subscribe((data:any[])=>{
       
     this.chartOptions_eos =this.highchart(data["prices"],"EOS");
          HC_exporting(Highcharts);
     });

    this.HttpApiService.getGraphBitcoin("cardano").subscribe((data:any[])=>{
       
     this.chartOptions_card =this.highchart(data["prices"],"Cardano");
          HC_exporting(Highcharts);
     });

    this.HttpApiService.getGraphBitcoin("litecoin").subscribe((data:any[])=>{
       
     this.chartOptions_ltc =this.highchart(data["prices"],"EOS");
          HC_exporting(Highcharts);
     });
    this.HttpApiService.getGraphBitcoin("binancecoin").subscribe((data:any[])=>{
       
     this.chartOptions_bnc =this.highchart(data["prices"],"Binance Coin");
          HC_exporting(Highcharts);
     });
    this.HttpApiService.getGraphBitcoin("stellar").subscribe((data:any[])=>{
       
     this.chartOptions_st =this.highchart(data["prices"],"Stellar");
          HC_exporting(Highcharts);
     });



    this.breakpointnews = (window.innerWidth <= 500) ? 1 : (window.innerWidth > 501 && window.innerWidth < 810) ? 2 : 4;
    
    this.breakpointgraph = (window.innerWidth <= 500) ? 1 : 2;
    
    this.breakpointaboutus = (window.innerWidth <= 500) ? 6 : 10;

    this.HttpApiService.sendGetRequest().subscribe((data: any[])=>{
    console.log(data);
    this.news_data = data;  
    });
  }

  highchart(data,name){
    let mychart={
      chart: {
                zoomType: 'x'
            },
            title: {
                text: null
            },
            exporting: { enabled: false },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Price'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: name,
                data: data,
            }]
          };
          return mychart;
  }
  onResizeNewsBox(event) {
    this.breakpointnews = (event.target.innerWidth <= 500) ? 1 : (event.target.innerWidth > 501 && event.target.innerWidth < 810) ? 2 : 4;
    
  }
  onResizegraphBox(event) {
    this.breakpointgraph = (window.innerWidth <= 500) ? 1 : 2;
  }
  
  onResizeaboutusBox(event) {
    this.breakpointaboutus = (window.innerWidth <= 500) ? 6 : 10;
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  } 

  



}