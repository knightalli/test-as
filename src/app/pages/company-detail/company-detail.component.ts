import { Component, Input, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/companyData/company-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss',
})
export class CompanyDetailComponent implements OnInit {

  constructor(private _cds: CompanyDataService, private _router: Router) {}

  public company: any;

  ngOnInit() {
    this.company = this._cds.getCompany()
    console.log(this.company)
    if (!this.company) this._router.navigate(['/list']);
  }
  
  
}
