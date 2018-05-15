import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterPage } from '../ajouter/ajouter';
import { Database } from '../../providers/database/database';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Table } from '../Injectables/Injectables';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private nav: NavController,
    public data: Database,
    public persons: any,
    public t: Table
  ) { }
  public modify() {
    return this.t.modify
  }
  public changeModify() {
    window.alert('hi');
    this.t.changeModify();
  }
  public goAddElement() {
    this.nav.push(AjouterPage);
  }
  ionViewDidEnter() {
    return this.data.getPersonList().then(data => this.persons = data);
  }
}
