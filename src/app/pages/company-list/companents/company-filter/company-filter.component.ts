import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyFilterComponent implements OnDestroy {
  public name: FormControl = new FormControl('');
  public industry: FormControl = new FormControl('');
  public type: FormControl = new FormControl('');

  public nameSub: Subscription = new Subscription();
  public industrySub: Subscription = new Subscription();
  public typeSub: Subscription = new Subscription();

  constructor() {
    this.nameSub = this.name.valueChanges.subscribe((value) =>
      this.onFilterChange()
    );
    this.industrySub = this.industry.valueChanges.subscribe((value) =>
      this.onFilterChange()
    );
    this.typeSub = this.type.valueChanges.subscribe((value) =>
      this.onFilterChange()
    );
  }

  @Input() types: string[] = [];
  @Input() industries: string[] = [];

  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  public onFilterChange(): void {
    this.filterChange.emit({
      name: this.name.value,
      industry: this.industry.value,
      type: this.type.value,
    });
  }

  ngOnDestroy() {
    this.nameSub.unsubscribe();
    this.industrySub.unsubscribe();
    this.typeSub.unsubscribe();
  }
}
