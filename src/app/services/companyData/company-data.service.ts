import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  public company: any;

  constructor() {}

  setCompany(company: any): void {
    this.company = company;
    console.log(this.company);
  }

  getCompany(): any {
    console.log(this.company);
    return this.company;
  }
}
