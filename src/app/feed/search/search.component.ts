import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosComponent } from '../comentarios/comentarios.component'

interface Distance {
  value: number;
  viewValue: string;
}

interface TipoAnuncio {
  value: string;
  viewValue: string;
}

interface Estado {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule , CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})


export class SearchComponent implements OnInit{

  distances: Distance[] = [
    {value: 5000, viewValue: '5,000 km'},
    {value: 10000, viewValue: '10,000 km'},
    {value: 15000, viewValue: '15,000 km'},
  ];


  tipoAnuncios: TipoAnuncio[] = [
    { value: "event", viewValue: 'Event' },
    { value: 'sale', viewValue: 'Sale' },
    { value: 'rent', viewValue: 'Rent' }
  ];

  estados:Estado[]=[
    {value: "novo" , viewValue: "Novo"}
  ]
  @Output() search = new EventEmitter<string>();

  searchQuery: string = "";

  @Input() postCreationDate: Date;

  constructor(private fecha:MatDialog,private comentarios:MatDialog) {
    this.postCreationDate = new Date("2024-01-05T22:05:00");
  }

  ngOnInit(): void {
  }

  performSearch() {
    this.search.emit(this.searchQuery);
  }

  close(){
    this.fecha.closeAll();

  }



  
  openChat(){
    (document.getElementById('sideChatBox') as HTMLElement).style.display='block';
    this.fecha.closeAll();

  }
  openComentarios(){
    this.fecha.closeAll();
    this.comentarios.open(ComentariosComponent)

  }
}
