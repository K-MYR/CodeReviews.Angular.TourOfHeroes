import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }
}
