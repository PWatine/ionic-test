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
import { ToastController, NavController } from 'ionic-angular';
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
var AjouterPage = /** @class */ (function () {
    function AjouterPage(toast, nav) {
        this.toast = toast;
        this.nav = nav;
        this.age = "";
        this.validAge = false;
        this.notRobot = false;
    }
    AjouterPage.prototype.validNumber = function (a) {
        return (a.isNumber && a < 120 && a >= 0);
    };
    AjouterPage.prototype.validName = function (x) {
        for (var a = 0; a < 10; a++) {
            if (x.indexOf('a') != -1) {
                return false;
            }
        }
        return true;
    };
    AjouterPage.prototype.condemn = function (x, y, z) {
        this.db.add(x, y, z);
        this.options = { message: this.firstName + ' ' + this.lastName + ' has been added.', duration: 2000, };
        this.notify();
    };
    AjouterPage.prototype.notify = function () {
        this.toast.create(this.options).present();
    };
    AjouterPage.prototype.changeFirstName = function (a) {
        this.firstName = a;
    };
    AjouterPage.prototype.changeLastName = function (a) {
        this.lastName = a;
    };
    AjouterPage.prototype.changeAge = function (a) {
        this.age = a;
    };
    AjouterPage.prototype.isEmpty2 = function (input) {
        return input == '';
    };
    AjouterPage.prototype.getf = function () {
        return this.firstName;
    };
    AjouterPage.prototype.getl = function () {
        return this.lastName;
    };
    AjouterPage.prototype.geta = function () {
        return this.age;
    };
    AjouterPage.prototype.isEmpty = function (input) {
        return this.notNull(input);
    };
    AjouterPage.prototype.isRobot = function (input) {
        return /\d/.test(input);
    };
    AjouterPage.prototype.notNull = function (input) {
        return !(input == null);
    };
    AjouterPage.prototype.incorrectAge = function (input) {
        return ((input < 0 || input > 113) && this.notNull(input));
    };
    AjouterPage.prototype.notSerious = function (input) {
        return /\D/.test(input);
    };
    AjouterPage = __decorate([
        Component({
            selector: 'page-ajouter',
            templateUrl: 'ajouter.html'
        }),
        __metadata("design:paramtypes", [ToastController, NavController])
    ], AjouterPage);
    return AjouterPage;
}());
export { AjouterPage };
//# sourceMappingURL=ajouter.js.map