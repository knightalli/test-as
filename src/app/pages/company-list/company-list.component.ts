import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyItemComponent } from './companents/company-item/company-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [HttpClientModule, CompanyItemComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
  providers: [HttpClientService]
})
export class CompanyListComponent implements OnInit, OnDestroy {

  public listOfCompanies: any[] = [];

  constructor(private httpService: HttpClientService){}

  public subscription = this.httpService.getData().subscribe({next:(data:any) => {for (let item of data) {this.listOfCompanies=[...this.listOfCompanies, item]; console.log(item)}}})

  ngOnInit(){
        
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
    console.log(this.listOfCompanies)
  }



}
