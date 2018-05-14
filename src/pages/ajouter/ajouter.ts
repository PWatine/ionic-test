import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  constructor(public nav: NavController) {
    
  }
  validNumber(a: any){
    return (a.isNumber && a < 120 && a >= 0);
  }
  validName(x:string) {
    for (var a = 0; a < 10; a++) {
      if (x.indexOf('a') != -1) {
        return false;
      }
    }
    return true;
  }
  
}


