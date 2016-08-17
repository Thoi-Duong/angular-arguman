import { Component } from '@angular/core';
import {Topic} from './topic';

@Component({
  selector: 'app-topics',
  templateUrl: 'app/topics.component.html'
})
export class TopicsComponent {
  topics: Topic[] = TOPIC;

}

const TOPIC: Topic[] = [
  {id: 11, type: 'but', content: 'topic content here', belong: 11},
  {id: 12, type: 'but', content: 'topic content here', belong: 11},
  {id: 13, type: 'but', content: 'topic content here', belong: 11},
  {id: 14, type: 'but', content: 'topic content here', belong: 11},
  {id: 15, type: 'but', content: 'topic content here', belong: 11},
  {id: 16, type: 'but', content: 'topic content here', belong: 11},
  {id: 17, type: 'but', content: 'topic content here', belong: 11},
  {id: 18, type: 'but', content: 'topic content here', belong: 11},
  {id: 19, type: 'but', content: 'topic content here', belong: 11},
  {id: 20, type: 'but', content: 'topic content here', belong: 11}
];
