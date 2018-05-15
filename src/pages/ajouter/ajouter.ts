import { Component } from '@angular/core';
import { ToastController,ToastOptions, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { person } from '../../Blacklist/person';
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
  tempperson : person;
  options: ToastOptions;
  public db: Database;
  constructor(private toast: ToastController, public nav: NavController) {
    this.tempperson.firstName = "";
    this.tempperson.lastName = "";
    this.tempperson.age = -1;
    this.options = { message: this.tempperson.firstName + ' ' + this.tempperson.lastName + ' has been added.', duration: 2000, }
    

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
    this.db.add(x,y,z);
    this.notify();
  }
  public notify() {
    var a = this.toast.create(this.options).present();
        
  }

  public changeFirstName(a: string) {
    this.tempperson.firstName = a;
  }
  public geti() {
    return this.tempperson.firstName;
  }

}



