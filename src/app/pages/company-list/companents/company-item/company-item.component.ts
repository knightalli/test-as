import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss'
})
export class CompanyItemComponent {
  @Input() id: number = 0;
  @Input() logo: string = '';
  @Input() suffix: string = '';
  @Input() businessName: string = '';
  @Input() industry: string = '';
  @Input() type: string = '';

  constructor(private _router: Router) { }

  public navigateToDetail(id: number): void {
    this._router.navigate
  }
}
