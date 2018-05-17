import { Component } from '@angular/core';
import { AjouterPage } from '../ajouter/ajouter';
import { Database } from '../../providers/database/database';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Table } from '../Injectables/Injectables';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ToastController, ToastOptions, NavController, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public table: Table;
  public search: string;
  public targets: any;
  public searched: any;
  public options: ToastOptions;
  constructor(
    private nav: NavController,
    public data: Database,
    private toast: ToastController,
  private alert:AlertController
  ) {
    this.table = new Table(true, false);
    this.search = "";
    this.data.get('targets').then((data) => {
      this.targets = data;
      this.search = "";

    });
  }
 
  public emptyMethod() {

  }
  public modify() {
    return this.table.modify;
  }
  public changeModify() {

    this.table.changeModify();
  }
  public goAddElement() {
    this.disableModify();
    this.nav.push(AjouterPage);
  }
  ionViewDidEnter() {
    return this.data.get('targets').then((targets) => this.targets = targets);
  }
  public isEmpty() {
    
    if (this.data == null)
      return true;
    else
      return this.targets == [];
  }
  public update() {

    return this.data.get('targets').then((targets) => this.targets = targets);
  }
  public remove(id: number) {
    this.update();
    console.log('begin: '+this.targets);
    this.data.remove(id);
    
    
    this.options = { message: 'Le nom a été supprimé!', duration: 1500, }
    this.toast.create(this.options).present();
   
    console.log('end: ' +this.targets);

    let event = this.alert.create({
      title: 'The name has been deleted!'
    });
    event.present();
    
    

  }
  public see(input) {
    return JSON.stringify(input);
  }
  public setSearch(a: string) {
    this.search = a;
    this.disableModify();
  }
  public getSearch() {
    if (this.targets == null||this.search=='') {
      this.searched=this.targets
      return this.searched;
    }
    else {
      this.searched = this.targets.filter(function (targets) { return (this.targets.firstName.search(this.search) != -1) || this.targets.lastName.search(this.search) });
      return this.searched;
    }
  }
  public disableModify() {
    this.table.modify = false;
  }
 
}
