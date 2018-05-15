import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Injectable } from '@angular/core';


@Injectable()
export class person {
  firstName: string;
  lastName: string;
  age: number = 0;
  id: number;

  constructor() {
    this.firstName="";
    this.lastName = "";
    this.age = 0;
    this.id = 0;
  }
  public reset() {
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
    this.id = 0;
  }
  public initialize(a: string, b: string, c:number, d:number) {
    this.firstName = a;
    this.lastName = b;
    this.age = c;
    this.id = d;
  }
 
}
