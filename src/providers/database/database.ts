import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { person } from '../../Blacklist/person';


@Injectable()
export class Database {
  counter: number;
  id: number;
  targets: any;
  constructor(private storage: Storage) {
    this.counter = 0;
    this.id = 0;
    this.storage.set('targets', []);
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
    this.id++;
    this.storage.get('targets').then((data) => {
      //if (data != null) {
        data.push(person);
        this.storage.set('targets', data)
      /*}
      else {
        let array = [];
        array.push(person);
        this.storage.set('targets', data)
      }*/
    });
    this.counter++;
    
  }
  
  public remove(id) {
    this.storage.get('targets').then((data) => { this.targets = data });
    this.targets = this.targets.filter(function (targets) { return this.targets.id !== id });
    this.storage.push(this.targets);
 
  }
  public get(key) {
    return this.storage.get(key);
  }
  
}
