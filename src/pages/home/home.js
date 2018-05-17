var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AjouterPage } from '../ajouter/ajouter';
import { Database } from '../../providers/database/database';
import { Table } from '../Injectables/Injectables';
import { ToastController, NavController, AlertController } from 'ionic-angular';
var HomePage = /** @class */ (function () {
    function HomePage(nav, data, toast, alert) {
        var _this = this;
        this.nav = nav;
        this.data = data;
        this.toast = toast;
        this.alert = alert;
        this.table = new Table(true, false);
        this.search = "";
        this.data.get('targets').then(function (data) {
            _this.targets = data;
            _this.search = "";
        });
    }
    HomePage.prototype.emptyMethod = function () {
    };
    HomePage.prototype.modify = function () {
        return this.table.modify;
    };
    HomePage.prototype.changeModify = function () {
        this.table.changeModify();
    };
    HomePage.prototype.goAddElement = function () {
        this.disableModify();
        this.nav.push(AjouterPage);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        return this.data.get('targets').then(function (targets) { return _this.targets = targets; });
    };
    HomePage.prototype.isEmpty = function () {
        if (this.data == null)
            return true;
        else
            return this.targets == [];
    };
    HomePage.prototype.update = function () {
        var _this = this;
        return this.data.get('targets').then(function (targets) { return _this.targets = targets; });
    };
    HomePage.prototype.remove = function (id) {
        this.update();
        console.log('begin: ' + this.targets);
        this.data.remove(id);
        this.options = { message: 'Le nom a été supprimé!', duration: 1500, };
        this.toast.create(this.options).present();
        console.log('end: ' + this.targets);
        var event = this.alert.create({
            title: 'The name has been deleted!'
        });
        event.present();
    };
    HomePage.prototype.see = function (input) {
        return JSON.stringify(input);
    };
    HomePage.prototype.setSearch = function (a) {
        this.search = a;
        this.disableModify();
    };
    HomePage.prototype.getSearch = function () {
        if (this.targets == null || this.search == '') {
            this.searched = this.targets;
            return this.searched;
        }
        else {
            this.searched = this.targets.filter(function (targets) { return (this.targets.firstName.search(this.search) != -1) || this.targets.lastName.search(this.search); });
            return this.searched;
        }
    };
    HomePage.prototype.disableModify = function () {
        this.table.modify = false;
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Database,
            ToastController,
            AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map