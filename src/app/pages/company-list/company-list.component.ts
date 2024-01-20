import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/httpClient/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyItemComponent } from './companents/company-item/company-item.component';
import { CompanyFilterComponent } from './companents/company-filter/company-filter.component';
import { CompanySortComponent } from './companents/company-sort/company-sort.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [HttpClientModule, CompanyItemComponent, CompanyFilterComponent, CompanySortComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
  providers: [HttpClientService]
})
export class CompanyListComponent implements OnDestroy {

  public listOfCompanies: any[] = [];

  constructor(private httpService: HttpClientService){}

  public subscription = this.httpService.getData().subscribe({next:(data:any) => {for (let item of data) {this.listOfCompanies=[...this.listOfCompanies, item];}}})
 
  ngOnDestroy() {
    this.subscription.unsubscribe;
    console.log(this.listOfCompanies)
  }

  // public navigateToDetail(id: number): void {
  //   this._router.navigateByUrl('detail/${id}')
  // }



}
