import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss'
})
export class ChatboxComponent {
  showChatbox: boolean = false;

  toggleChatbox() {
    this.showChatbox = !this.showChatbox;
  }
}
