import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { EventoComponent } from './evento/evento.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog';
import { PopupPComponent } from './popup-p/popup-p.component';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ArtigosPopupComponent } from './artigos-popup/artigos-popup.component';
import { InterresadosComponent } from './interresados/interresados.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { SearchComponent } from './search/search.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FontAwesomeModule, EventoComponent, MatDialogModule, CommonModule, ChatboxComponent, ArtigosPopupComponent, InterresadosComponent, ComentariosComponent, SearchComponent, PerfilComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

  isFeedActive: boolean = true;

  faPeopleGroup = faPeopleGroup;
  faRss = faRss;
  faMagnifyingGlass = faMagnifyingGlass;
  faMessage = faMessage;
  faRightFromBracket = faRightFromBracket;
  faPaperPlane = faPaperPlane;
  faPaperclip = faPaperclip;
  faArtigo = faClipboardList
  faHamb = faBars
  faAboutUs = faPeopleGroup;

  dadosUtilizador:any={
    id:'',
    id_dist:'',
    id_munic:'',
    nome:'',
    coordenadasmorada:'',
    email:'',
    nif:'',
    tipouser:''


  };

  @ViewChild('mySidenav') sidenav!: ElementRef;
  @ViewChild('interessados') interessados!: ElementRef;
  @ViewChild('meusartigosfriends') meusArt!: ElementRef;
  @ViewChild('publicacoes') pubs!: ElementRef;
  @ViewChild('eventos') eventos!: ElementRef;

  activeSection: string = 'publicacoes';

  ngAfterViewInit():void{
    setTimeout(() => {
      let dados:any = JSON.parse(String(localStorage.getItem('user')))

      this.dadosUtilizador={
        nome:dados.nome,
        id:dados.id,
        id_dist:dados.id_dist,
        id_munic:dados.id_munic,
        coordenadasmorada:dados.coordenadasmorada,
        email:dados.email,
        nif:dados.nif,
        tipouser:dados.tipouser
      }
      console.log(this.dadosUtilizador)


      
    }, 100);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 1000) {
      this.setActiveSection(this.activeSection)
    }else{
      this.displayAllSections();
    }
  }


  displayAllSections() {
    this.meusArt.nativeElement.style.display = 'flex';
    this.pubs.nativeElement.style.display = 'block';
    this.eventos.nativeElement.style.display = 'block';
  }

  openAboutUs(){
    this.router.navigate(['/aboutUs'])

  }
  setActiveSection(activeSec:string) {

    this.activeSection=activeSec;

    console.log(activeSec)

    switch (this.activeSection) {

      case 'meusartigos-friends':
        this.meusArt.nativeElement.style.display = 'flex';
        this.pubs.nativeElement.style.display = 'none';
        this.eventos.nativeElement.style.display = 'none';
        break;

      case 'publicacoes':
        this.meusArt.nativeElement.style.display = 'none';
        this.pubs.nativeElement.style.display = 'block';
        this.eventos.nativeElement.style.display = 'none';
        break;

      case 'eventos':
        this.meusArt.nativeElement.style.display = 'none';
        this.pubs.nativeElement.style.display = 'none';
        this.eventos.nativeElement.style.display = 'block';
        break;

      default:
        break;
    }
 
  }

  showSection(section: string) {
    this.activeSection = section;
  }


  openNav() {
    this.sidenav.nativeElement.style.width = '250px';
  }

  closeNav() {
    this.sidenav.nativeElement.style.width = '0';
  }

  @Input() postCreationDate: Date;

  constructor(private router: Router,private subbtn: MatDialog, private artbtn: MatDialog, private coment: MatDialog, private search: MatDialog, private perfil: MatDialog) {

    this.postCreationDate = new Date("2024-01-05T22:05:00");


  }

  openperfil() {
    this.perfil.open(PerfilComponent)
  }

  opensearch() {
    this.search.open(SearchComponent);
  }

  opencoment() {
    this.coment.open(ComentariosComponent);
  }

  openartg() {
    this.artbtn.open(ArtigosPopupComponent);
  }

  opensubbtn() {
    this.subbtn.open(PopupPComponent);
  }

  handleSendClick() {
    console.log('send icon clicked');
  }

  handleAttachClick() {
    console.log('Attach icon clicked');
  }

  handleSearchClick() {

    console.log('Search icon clicked');
  }

  handleChatClick() {

    console.log('Chat icon clicked');
  }

  handleLogoutClick() {

    console.log('Logout icon clicked');
  }

  toggleFeed() {
    this.isFeedActive = true;
    console.log("Feed is active");
  }

  toggleArtigos() {
    this.isFeedActive = false;
    console.log("Artigos are active");
  }


}