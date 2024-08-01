import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css',
})
export class PortfolioCardComponent {
  @Input() bgOpacity: string = 'bg-opacity-100';
  @Input() ProjectName: string = 'Project Name';
}
