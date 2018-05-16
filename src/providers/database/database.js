var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
var Database = /** @class */ (function () {
    function Database(storage) {
        this.storage = storage;
        this.counter = 0;
        this.id = 0;
        this.storage.set('targets', []);
    }
    Database.prototype.isEmpty = function () {
        if (this.counter == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Database.prototype.add = function (a, b, c) {
        var _this = this;
        var person = { firstName: a, lastName: b, age: c, id: this.id };
        this.id++;
        this.storage.get('targets').then(function (data) {
            //if (data != null) {
            data.push(person);
            _this.storage.set('targets', data);
            /*}
            else {
              let array = [];
              array.push(person);
              this.storage.set('targets', data)
            }*/
        });
        this.counter++;
    };
    Database.prototype.remove = function (id) {
        var _this = this;
        this.storage.get('targets').then(function (data) { _this.targets = data; });
        this.targets = this.targets.filter(function (targets) { return this.targets.id !== id; });
        this.storage.push(this.targets);
    };
    Database.prototype.get = function (key) {
        return this.storage.get(key);
    };
    Database = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], Database);
    return Database;
}());
export { Database };
//# sourceMappingURL=database.js.map