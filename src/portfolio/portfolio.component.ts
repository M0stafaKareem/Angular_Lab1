import { Component } from '@angular/core';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {}
