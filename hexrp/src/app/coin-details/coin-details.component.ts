import { Component, OnInit } from '@angular/core';
import { CoinApiService } from '../coin-api.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  coin_data: any[];
  constructor(private CoinApiService: CoinApiService) { }

  ngOnInit(): void {
    var pagenumber = 1;
    this.CoinApiService.getAllCoins(pagenumber).subscribe((data: any[])=>{
      console.log(data);
      this.coin_data = data;  
      });
  }
    displayedColumns: string[] = ['market_cap_rank', 'name', 'current_price', 'change_1h','change_24h', 'change_7d', 'market_cap'];
    dataSource = this.coin_data;
  }


