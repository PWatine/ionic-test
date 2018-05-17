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
        this.tempSpace = [];
        this.targets = [];
        this.storage.set('targets', this.tempSpace);
    }
    Database.prototype.isEmpty = function () {
        return (this.counter == 0);
    };
    Database.prototype.add = function (a, b, c) {
        var _this = this;
        var person = { firstName: a, lastName: b, age: c, id: this.id };
        this.id++;
        this.storage.get('targets').then(function (data) {
            data.push(person);
            _this.storage.set('targets', data);
        });
        this.counter++;
    };
    Database.prototype.find = function () {
    };
    Database.prototype.remove = function (id) {
        var _this = this;
        console.log('1');
        this.storage.get('targets').then(function (data) {
            _this.targets = data;
            _this.tempSpace = [];
            console.log('2');
            _this.targets.forEach(function (element) {
                if (element.id != id) {
                    _this.tempSpace.push(element);
                }
                ;
                console.log('3');
            });
            console.log('4');
            console.log('Got before: ' + _this.targets);
            _this.targets = _this.tempSpace;
            console.log('storing: ' + _this.targets);
            _this.storage.set('targets', _this.tempSpace);
            _this.counter--;
        });
        console.log('5');
        console.log('Got: ' + this.targets);
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