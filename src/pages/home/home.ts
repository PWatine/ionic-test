import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterPage } from '../ajouter/ajouter';
import { Database } from '../../providers/database/database';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Table } from '../Injectables/Injectables';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public table: Table;
  public search: string;
  public targets: any;
  constructor(
    private nav: NavController,
    public data: Database,
  ) {
    this.table = new Table(true, false);
    this.search = "";
    this.data.get('targets').then((data) => {
      this.targets=data
    });
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
    return this.data.get('targets').then((targets) => this.targets = targets);
  }
  public isEmpty() {

    if (this.data==null)
      return true;
    else
     return this.data.isEmpty();
  }
  public remove(id: number) {
    this.data.remove(id);
  }
  public setSearch(a: string) {
    this.search = a;
    this.disableModify();
  }
  public getSearch() {
    return this.search;
  }
  public disableModify() {
    this.table.modify = false;
  }
 
}
