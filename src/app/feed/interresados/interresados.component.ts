import { Component } from '@angular/core';

@Component({
  selector: 'app-interresados',
  standalone: true,
  imports: [],
  templateUrl: './interresados.component.html',
  styleUrl: './interresados.component.scss'
})
export class InterresadosComponent {

  showbox: boolean = false;

  togglebox() {
    this.showbox = !this.showbox;
  }
  
  close(){
    (document.getElementById('interessados-popup') as HTMLElement).style.display='none';

  }
}
