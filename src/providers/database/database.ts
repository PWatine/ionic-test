import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { person } from '../../Blacklist/person';
import { Events } from 'ionic-angular';



@Injectable()
export class Database {
  counter: number;
  id: number;
  targets: any[];
  tempSpace: any[];
  constructor(private storage: Storage) {
    this.counter = 0;
    this.id = 0;
    this.tempSpace = [];
    this.targets = [];
    this.storage.set('targets', this.tempSpace);

  }
    
  public isEmpty() {
    return (this.counter == 0);
  }
  public add(a, b, c) {
    let person = { firstName: a, lastName: b, age: c, id: this.id };
    this.id++;
    this.storage.get('targets').then((data) => {
      data.push(person);
      this.storage.set('targets', data);
    });
    this.counter++;
    
  }
  public find() {

  }
  
  public remove(id: number) {

    console.log('1');
    this.storage.get('targets').then((data) => {
      this.targets = data;

        this.tempSpace = [];
      console.log('2');
      this.targets.forEach((element)=> {

        if (element.id != id) {
          this.tempSpace.push(element);

          
        };
        console.log('3');
      });
      console.log('4');
      console.log('Got before: ' + this.targets);
      this.targets = this.tempSpace;
      console.log('storing: ' + this.targets);
      this.storage.set('targets', this.tempSpace);
      this.counter--;
      
    });
    console.log('5');
    console.log('Got: ' + this.targets);
  }
  public get(key) {
    return this.storage.get(key);
  }
  
}
