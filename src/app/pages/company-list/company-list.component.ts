import {
  Component,
  Input,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectionStrategy,
} from '@angular/core';
import { HttpClientService } from '../../services/httpClient/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyItemComponent } from './companents/company-item/company-item.component';
import { CompanyFilterComponent } from './companents/company-filter/company-filter.component';
import { CompanySortComponent } from './companents/company-sort/company-sort.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    HttpClientModule,
    CompanyItemComponent,
    CompanyFilterComponent,
    CompanySortComponent,
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
  providers: [HttpClientService],
})
export class CompanyListComponent implements OnDestroy, AfterViewChecked {
  @Input() public field: string = '';

  public listOfCompanies: any[] = [];
  public listCopy: any[] = [];
  public industries: string[] = [];
  public types: string[] = [];
  public isLoading: boolean = true;

  constructor(private httpService: HttpClientService) {}

  public subscription = this.httpService.getData().subscribe({
    next: (data: any) => {
      for (let item of data) {
        this.listOfCompanies = [...this.listOfCompanies, item];
      }
      this.listCopy = this.listOfCompanies;
      this.isLoading = false;
    },
  });

  ngAfterViewChecked() {
    for (let company of this.listOfCompanies) {
      if (!this.industries.includes(company.industry))
        this.industries = [...this.industries, company.industry];

      if (!this.types.includes(company.type))
        this.types = [...this.types, company.type];
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  // всё для сортировки ====================

  public byField(field: string) {
    return (a: any, b: any) => (a[field] > b[field] ? 1 : -1);
  }

  public sortListOfCompanies(field: string) {
    this.listOfCompanies.sort(this.byField(field));
  }

  public sortByField(field: string) {
    if (field) this.sortListOfCompanies(field);
  }

  //============================================

  //всё для фильтра ============================
  public filterList(filter: any) {
    this.listOfCompanies = [...this.listCopy];

    if (filter.name) {
      this.listOfCompanies = this.listOfCompanies.filter((company) =>
        company.business_name.includes(filter.name)
      );
    }
    if (filter.industry) {
      this.listOfCompanies = this.listOfCompanies.filter((company) =>
        company.industry.includes(filter.industry)
      );
    }
    if (filter.type) {
      this.listOfCompanies = this.listOfCompanies.filter((company) =>
        company.type.includes(filter.type)
      );
    }
  }
  //============================================
}
