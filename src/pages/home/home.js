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
import { NavController } from 'ionic-angular';
import { AjouterPage } from '../ajouter/ajouter';
import { Database } from '../../providers/database/database';
import { Table } from '../Injectables/Injectables';
var HomePage = /** @class */ (function () {
    function HomePage(nav, data, persons, t) {
        this.nav = nav;
        this.data = data;
        this.persons = persons;
        this.t = t;
    }
    HomePage.prototype.modify = function () {
        return this.t.modify;
    };
    HomePage.prototype.changeModify = function () {
        window.alert('hi');
        this.t.changeModify();
    };
    HomePage.prototype.goAddElement = function () {
        this.nav.push(AjouterPage);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        return this.data.getPersonList().then(function (data) { return _this.persons = data; });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Database, Object, Table])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map