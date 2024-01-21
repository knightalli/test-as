import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDataService } from '../../../../services/companyData/company-data.service';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyItemComponent {
  @Input() company: any;

  constructor(private _router: Router, private _cds: CompanyDataService) {}

  public navigateToDetail(id: number): void {
    this._cds.setCompany(this.company);
    this._router.navigateByUrl(`detail/${id}`);
  }
}
