import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-sort',
  standalone: true,
  imports: [],
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanySortComponent {
  @Output() sortFieldChange: EventEmitter<string> = new EventEmitter<string>();
  
  onFieldChange(field: string) {
    this.sortFieldChange.emit(field);
  }
}
