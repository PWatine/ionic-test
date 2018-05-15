var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var Table = /** @class */ (function () {
    function Table(validInputs, modify) {
        this.validInputs = validInputs;
        this.modify = modify;
        modify = false;
        validInputs = false;
    }
    Table.prototype.changeModify = function () {
        this.modify = !this.modify;
    };
    Table.prototype.submitInputs = function () {
        this.validInputs = !this.validInputs;
    };
    Table = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Boolean, Boolean])
    ], Table);
    return Table;
}());
export { Table };
//# sourceMappingURL=Injectables.js.map