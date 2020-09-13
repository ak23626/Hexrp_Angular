import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinApiService {
  get(url: any, arg1: {}) {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient: HttpClient) { }

  public getAllCoins(pagenumber) {
    return this.httpClient.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page="+pagenumber+"&sparkline=false&price_change_percentage=1h%2C24h%2C7d");
  }
}
