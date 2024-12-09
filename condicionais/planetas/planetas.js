"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var World = /** @class */ (function () {
    function World(n, peso) {
        this.numero = n;
        this.peso = peso;
    }
    World.prototype.weight = function () {
        switch (this.numero) {
            case 1: return this.peso * 0.37;
            case 2: return this.peso * 0.88;
            case 3: return this.peso;
            case 4: return this.peso * 0.38;
            case 5: return this.peso * 2.64;
            case 6: return this.peso * 1.15;
            case 7: return this.peso * 1.17;
            case 8: return this.peso * 1.18;
            case 9: return this.peso * 0.11;
        }
        return this.peso;
    };
    return World;
}());
exports.default = World;
