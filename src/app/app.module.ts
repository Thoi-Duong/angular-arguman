import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ArgumansComponent }  from './argumans.component';
import { ArgumanService }  from './arguman.service';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ArgumansComponent, AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ArgumanService ]
})
export class AppModule { }
