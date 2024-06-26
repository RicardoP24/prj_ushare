import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterresadosComponent } from '../interresados/interresados.component';
import { ComentariosComponent } from '../comentarios/comentarios.component';


@Component({
  selector: 'app-artigos-popup',
  standalone: true,
  imports: [CommonModule , InterresadosComponent],
  templateUrl: './artigos-popup.component.html',
  styleUrl: './artigos-popup.component.scss'
})
export class ArtigosPopupComponent {


  selectedOption: string;

  @Input() postCreationDate: Date;

  constructor(private fecha:MatDialog,private comentarios:MatDialog  ){

    this.selectedOption = 'artigos';
    
    this.postCreationDate = new Date("2024-01-05T22:05:00");
  }

  selectOption(option: string) {
  
    this.selectedOption = option;
  }

  close(){
    this.fecha.closeAll();

  }

  verInteressados(){
    (document.getElementById('interessados-popup') as HTMLElement).style.display='block';
    this.fecha.closeAll();

  }

  openComentarios() {
    this.fecha.closeAll();
    this.comentarios.open(ComentariosComponent)
  }

}
