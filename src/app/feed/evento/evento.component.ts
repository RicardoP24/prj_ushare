import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { ComentariosComponent } from '../comentarios/comentarios.component';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.scss'
})
export class EventoComponent {


  @Input() postCreationDate: Date;

  constructor(private fecha: MatDialog, private comentarios: MatDialog) {

    this.postCreationDate = new Date("2024-01-05T22:05:00");
  }

  openChat() {
    (document.getElementById('sideChatBox') as HTMLElement).style.display = 'block';
    this.fecha.closeAll();

  }
  openComentarios() {
    this.fecha.closeAll();
    this.comentarios.open(ComentariosComponent)
  }
} 