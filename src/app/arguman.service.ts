import { Injectable } from '@angular/core';
import { ARGUMANS }     from './mock-argumans';
import { Arguman } from './arguman';
@Injectable()
export class ArgumanService {
  getArgumans() {
    return ARGUMANS;
  }
}
