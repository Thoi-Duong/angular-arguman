import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TopicsComponent }  from './topics.component';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TopicsComponent, AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
