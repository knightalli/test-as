import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.scss',
})
export class LayoutComponentComponent {
  constructor(public router: Router) {}
}
