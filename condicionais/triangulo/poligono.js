"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Figura = /** @class */ (function () {
    function Figura(medida) {
        if (medida === void 0) { medida = 0; }
        this.medida = medida;
    }
    Figura.prototype.tIsreal = function (co, ca, hp) {
        var array = [co, ca, hp];
        var newArray = array.sort();
        return (newArray[2]++ + newArray[1]++ > newArray[0]++);
    };
    return Figura;
}());
exports.default = Figura;
