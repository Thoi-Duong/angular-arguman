import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Arguman} from './arguman';
import { ArgumanService }  from './arguman.service';
@Component({
  selector: 'app-argumans',
  styleUrls: ['app/argumans.component.css'],
  templateUrl: 'app/argumans.component.html'
})
export class ArgumansComponent implements OnInit {
  argumans: Arguman[];
  constructor( private argumanService: ArgumanService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.getArgumans(id);
      } else {
        console.log("Undefined params!!!!!!" + params['id']);
      }
    });
    // this.getArgumans();
  }
  getArgumans(id: number){
    this.argumanService.getArgumans(id).then(argumans => {this.argumans = argumans; console.log('arguman length::' + this.argumans.length);});
  }
  selectedAaguman: Arguman;
  onSelect(arguman: Arguman) { this.selectedAaguman = arguman; console.log(arguman.content); }

  gotoArguman(arguman: Arguman) {
    let link = ['/arguman', arguman.id];
    this.router.navigate(link);
  }
}


