import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  public company: any;

  constructor() {}

  setCompany(company: any): void {
    this.company = company;
  }

  getCompany(): any {
    return this.company;
  }
}
