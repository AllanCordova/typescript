"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Angulo = /** @class */ (function () {
    function Angulo(anguloR, anguloM) {
        this.relogio = anguloR;
        this.minuto = anguloM;
    }
    Angulo.prototype.angRelogio = function () {
        if (this.relogio == 12 && this.minuto == 0 || this.relogio == 24 && this.minuto == 0) {
            return this.relogio = 0;
        }
        else {
            if (this.relogio == 12 && this.minuto > 0 || this.relogio == 24 && this.minuto > 0) {
                return this.relogio = this.minuto * 0.5;
            }
            else {
                if (this.relogio > 12) {
                    this.relogio = (this.relogio - 1) / 2;
                    return (this.relogio * 30) + (this.minuto * 0.5);
                }
                else {
                    return (this.relogio * 30) + (this.minuto * 0.5);
                }
            }
        }
    };
    Angulo.prototype.angMinuto = function () {
        if (this.minuto == 60) {
            return this.minuto = 0;
        }
        else {
            return (this.minuto * 6);
        }
    };
    Angulo.prototype.toString = function () {
        return "Angula\u00E7\u00E3o do ponteiro de horas \u00E9 de ".concat(this.angRelogio(), "\nAngula\u00E7\u00E3o do ponteiro de minutos \u00E9 de ").concat(this.angMinuto());
    };
    return Angulo;
}());
exports.default = Angulo;
