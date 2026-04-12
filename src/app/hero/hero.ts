import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero { 

  name: string = 'Mario Markwart';
  role: string = 'Frontend Developer';

  arrowDownIcon: string = '/img/controls/arrow-down.svg';
  arrowDownText: string = 'Scroll Down';
}
