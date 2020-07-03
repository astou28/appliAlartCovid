import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  url = 'http://api.coronastatistics.live';


  constructor(private Httpclient: HttpClient) {}
  apiCall(){
    return this.Httpclient.get(`${this.url}/All`);
  }
}
