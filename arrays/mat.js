"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InteiroMatematico = /** @class */ (function () {
    function InteiroMatematico(numero) {
        this.n = numero;
    }
    InteiroMatematico.prototype.getDivisores = function () {
        var divisores = [1];
        for (var i = 2; i <= this.n / 2; i++) {
            if (this.n % i == 0) {
                divisores.push(i);
            }
        }
        divisores.push(this.n);
        return divisores;
    };
    InteiroMatematico.prototype.serieDeFibonacci = function () {
        var fibonacci = [1, 1], last = 1, next = 1;
        for (var i = 2; i < this.n; i++) {
            var temp = next;
            next += last;
            last = temp;
            fibonacci.push(next);
        }
        return fibonacci;
    };
    InteiroMatematico.prototype.serieDeTribonacci = function () {
        var tribonacci = [1, 1, 2], last = 1, mid = 1, next = 2;
        for (var i = 3; i < this.n; i++) {
            var auxOne = next;
            var auxTwo = mid;
            next += mid + last;
            mid = auxOne;
            last = auxTwo;
            tribonacci.push(next);
        }
        return tribonacci;
    };
    InteiroMatematico.prototype.getPrimos = function () {
        var primos = [], isPrimo = true;
        var num = 2;
        while (num <= this.n) {
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrimo = false;
                }
            }
            if (isPrimo) {
                primos.push(num);
            }
            isPrimo = true;
            num++;
        }
        return primos;
    };
    return InteiroMatematico;
}());
exports.default = InteiroMatematico;
