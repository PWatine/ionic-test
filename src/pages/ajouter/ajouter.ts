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
  age: string;
  notRobot: boolean;
  validAge: boolean;
  options: ToastOptions;
  element: any;
  
  list: any;
  constructor( private toast: ToastController, public nav: NavController, public db: Database) {

    this.age = "";
    this.validAge = false;
    this.notRobot = false;
    this.db.get('targets').then((data) => {
      this.list = data;
      
    });

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
  public condemn(x: string, y: string, z: string) {
    if (this.isRobot(x) || this.isEmpty2(x) || this.isRobot(y) || this.isEmpty2(y) || this.notSerious(z) || this.incorrectAge(z)) {
      this.options = { message: 'Vérifiez vos réponses', duration: 4000, }
      this.toast.create(this.options).present();
    }
    else {
      this.db.add(x, y, z);
      this.options = { message: x + ' ' + y + ' has been added.', duration: 2000, }
      this.toast.create(this.options).present();
      this.nav.pop();
    }
  }
 

  public changeFirstName(a: string) {
    this.firstName = a;
  }
  public changeLastName(a: string) {
    this.lastName = a;
  }
  public changeAge(a) {
    this.age = a;
  }
  public isEmpty2(input) {
    return input == '';
  }
  
  
  
  public isRobot(input) {
    return /\d/.test(input);
  }
  public incorrectAge(input) {
    return ((input < 0 || input > 113) && !(input == null));

  }
  public notSerious(input) {
    return /\D/.test(input);
  }
  
 
}



