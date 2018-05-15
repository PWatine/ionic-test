import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterPage } from '../ajouter/ajouter';
import { Database } from '../../providers/database/database';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Table } from '../Injectables/Injectables';
import { isUndefined } from 'ionic-angular/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public table: Table;

  constructor(
    private nav: NavController,
    public data: Database,
    public persons: Database,
  ) {
    this.table = new Table(true, false);
 
  }
  public modify() {
    return this.table.modify;
  }
  public changeModify() {
    
    this.table.changeModify();
  }
  public goAddElement() {
    this.nav.push(AjouterPage);
  }
  ionViewDidEnter() {
    return this.data.getPersonList().then(data => this.persons = data);
  }
  public isEmpty() {
    if (isUndefined(this.data))
      return true;
    else
     return this.data.isEmpty();
  }
}
