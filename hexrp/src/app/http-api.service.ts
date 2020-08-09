import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  get(url: any, arg1: {}) {
    throw new Error("Method not implemented.");
  }
// private posts: Post[] = [];
  constructor(private httpClient: HttpClient) { }



  public sendGetRequest(){

    let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Accept', 'application/json');
headers = headers.append('x-api-key', '77e7e18e26bbeb9c617d502e8a9e5f23');
    return this.httpClient.get("https://cryptocontrol.io/api/v1/public/news/coin/litecoin?language=en&?sentiment=true", {headers});
  }

  public getGraphBitcoin(id) {
    return this.httpClient.get("https://api.coingecko.com/api/v3/coins/"+id+"/market_chart?vs_currency=usd&days=1");
  }

  public getBlogPost() {
    return this.httpClient.get("http://localhost:3000")
  }

  getApiResponse(url) {
    return this.httpClient.get<any[]>(url, {})
      .toPromise().then(res => {
        return res;
      });
  }
}
