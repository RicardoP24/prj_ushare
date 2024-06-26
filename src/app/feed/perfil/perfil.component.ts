import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosComponent } from '../comentarios/comentarios.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  @Input() postCreationDate: Date;

  selectedOption: string;

  constructor(private fechar: MatDialog, private comentarios: MatDialog) {

    this.selectedOption = 'artigos';


    this.postCreationDate = new Date("2024-01-05T22:05:00");
  }

  selectOption(option: string) {

    this.selectedOption = option;
  }

  verInteressados() {
    (document.getElementById('interessados-popup') as HTMLElement).style.display = 'block';
    this.fechar.closeAll();

  }
  openComentarios() {
    this.fechar.closeAll();
    this.comentarios.open(ComentariosComponent)
  }
  close() {
    this.fechar.closeAll();

  }
}
