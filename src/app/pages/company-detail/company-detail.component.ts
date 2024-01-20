import { Component, Input, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/companyData/company-data.service';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss',
})
export class CompanyDetailComponent implements OnInit {

  constructor(private _cds: CompanyDataService) {}

  public company: any;

  ngOnInit() {
    this.company = this._cds.getCompany()
    console.log(this.company)
  }
  
  
}
