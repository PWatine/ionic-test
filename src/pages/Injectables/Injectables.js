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
    return Table;
}());
export { Table };
//# sourceMappingURL=Injectables.js.map