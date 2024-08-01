import { Component } from '@angular/core';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
