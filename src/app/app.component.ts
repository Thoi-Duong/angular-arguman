import { Component }           from '@angular/core';
import './rxjs-extensions';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  topic = 'có nên ăn thịt chó hay không ?';
  goBack() {
    window.history.back();
  }
}
