import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.css',
})
export class SkillBarComponent {
  // Default width
  @Input() width: number = 0;

  // Default title
  @Input() title: string = 'dummy';
}
