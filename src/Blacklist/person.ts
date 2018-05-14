import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

export class person {
  firstName: string;
  lastName: string;
  age: number=0;
  id: number;
 
  constructor(a: string, b: string, c: number, d: number) {
    this.firstName = a;
    this.lastName = b;
    this.age = c;
    this.id = d;
  }
}
