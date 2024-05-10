import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  linkedIn: string = 'https://www.linkedin.com/in/ronald-chaves-oliveira/';
  gitHub: string = 'https://github.com/RonaldChaves';
  instagram: string = 'https://www.instagram.com/r.chvss/';

}
