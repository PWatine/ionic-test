import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { person } from '../../Blacklist/person';


@Injectable()
export class Database {
  counter: number;
  id:number;  
  constructor(private storage: Storage) {
    this.counter=0;
    this.id=0;
  }
    
  public isEmpty() {
    if(this.counter == 0){
     return true;
    }
    else{
      return false;
    }
  }
  public add(a, b, c) {
    let person = { firstName: a, lastName: b, age: c, id: this.id };
    this.storage.set('persons', JSON.stringify(person))
    this.counter++;
    this.id++;
  }
  /*
  public remove(id) {
    var a = this.getPersonList();
    var b = {};
    for (var v in a) {
      if (v.id != id.toString()) {
        b = b + x;
      }

    }
    this.storage.remove('persons'.id.toString());
    this.counter--;
  }
  public getPersonInfo(id: number) {
    return this.storage.get(id.toString())
  }*/
  public getPersonList() {
    return this.storage.get('persons')
  }
}
