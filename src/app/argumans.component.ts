import { Component } from '@angular/core';
import {Arguman} from './arguman';
import { ArgumanService }  from './arguman.service';
@Component({
  selector: 'app-argumans',
  styleUrls: ['app/argumans.component.css'],
  templateUrl: 'app/argumans.component.html'
})
export class ArgumansComponent {
  argumans: Arguman[];
  constructor(argumanService: ArgumanService) {
    this.argumans = argumanService.getArgumans();
  }
  selectedTopic: Arguman;
  onSelect(topic: Arguman) { this.selectedTopic = topic; console.log(topic.content); }
}


