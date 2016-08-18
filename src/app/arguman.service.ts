import { Injectable } from '@angular/core';
import { ARGUMANS }     from './mock-argumans';
import { Arguman } from './arguman';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ArgumanService {
  getArgumans(id: number) {
    console.log('Arguman id::: '+id);
    var agus: Arguman[] = ARGUMANS.filter(function(arguman){
       return arguman.belong === id;
    }) as Arguman[];
    return Promise.resolve(agus);
  }

  // getArgunamChilds(id: number){
  //   this.getArgumans().map((arguman) => heroes.find(hero => hero.id === id));
  // }
}
