import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://random-data-api.com/api/company/random_company?size=100')
  }
}
