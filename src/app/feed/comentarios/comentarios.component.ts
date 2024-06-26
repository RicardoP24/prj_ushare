import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.scss'
})
export class ComentariosComponent {

  @Input() postCreationDate: Date;

  constructor(private fechar:MatDialog ){

    
    this.postCreationDate = new Date("2024-01-05T22:05:00");
  }

  close(){
    this.fechar.closeAll();

  }

}
