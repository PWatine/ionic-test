import { Component } from '@angular/core';
import { ToastController,ToastOptions, NavController } from 'ionic-angular';
import { FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Database } from '../../providers/database/database';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'page-ajouter',
  templateUrl: 'ajouter.html'
  
})
export class AjouterPage {
  firstName: string;
  lastName: string;
  age: number;
  notRobot: boolean;
  validAge: boolean;
  options: ToastOptions;
  public db: Database;
  constructor(private toast: ToastController, public nav: NavController) {
    this.firstName = "";
    this.lastName = "";
    
    this.validAge = false;
    this.notRobot = false;
   

  }
  public validNumber(a: any){
    return (a.isNumber && a < 120 && a >= 0);
  }
  public validName(x:string) {
    for (var a = 0; a < 10; a++) {
      if (x.indexOf('a') != -1) {
        return false;
      }
    }
    
    return true;
  }
  public condemn(x: string, y:string, z:number) {
    this.db.add(x, y, z);
    this.options = { message: this.firstName + ' ' + this.lastName + ' has been added.', duration: 2000, }
    this.notify();
  }
  public notify() {
    this.toast.create(this.options).present();
        
  }

  public changeFirstName(a: string) {
    this.firstName = a;
  }
  public changeLastName(a: string) {
    this.lastName = a;
  }
  public changeAge(a: number) {
    this.age = a;
  }
  public getf() {
    return this.firstName;
  }
  public getl() {
    return this.lastName;
  }
  public geta() {
    return this.age;
  }

  public isEmpty(input) {
    return (input == '0' || input == '');
  }
  public isRobot(input) {
    return /\d/.test(input);
  }
  public notNull(input) {
    return !(input == null);
  }
  public incorrectAge(input) {
    return ((input < 0 || input > 113) && this.notNull(input));

  }
 
}



