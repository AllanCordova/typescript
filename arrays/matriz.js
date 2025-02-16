"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrizAleatoria = /** @class */ (function () {
    function matrizAleatoria(linhas, colunas) {
        this.c = colunas;
        this.r = linhas;
        this.m = [];
        for (var i = 0; i < this.r; i++) {
            this.m[i] = [];
            for (var j = 0; j < this.c; j++) {
                this.m[i][j] = Math.ceil(Math.random() * 100);
            }
        }
    }
    matrizAleatoria.prototype.toString = function (array) {
        for (var i = 0; i < this.m.length; i++) {
            console.log("".concat(array[i], "\n"));
        }
    };
    matrizAleatoria.prototype.somaLinhaColuna = function () {
        for (var i = 0; i < this.r; i++) {
            for (var j = 0; j < this.c; j++) {
                this.m[i][j] = i + j;
            }
        }
        return this.m;
    };
    matrizAleatoria.prototype.multiplicaPor = function (n) {
        for (var i = 0; i < this.m.length; i++) {
            for (var j = 0; j < this.c; j++) {
                this.m[i][j] *= n;
            }
        }
    };
    matrizAleatoria.prototype.somaCom = function (n) {
        if (n.length != this.r) {
            return [];
        }
        if (n[0].length != this.c) {
            return [];
        }
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            aux[i] = [];
            for (var j = 0; j < this.c; j++) {
                aux[i][j] = this.m[i][j] + n[i][j];
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.binaria = function () {
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            aux[i] = [];
            for (var j = 0; j < this.c; j++) {
                aux[i][j] = this.m[i][j] % 2;
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.diagonalPrincipal = function () {
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            aux[i] = this.m[i][i];
        }
        return aux;
    };
    matrizAleatoria.prototype.diagonalSecundaria = function () {
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            aux[i] = this.m[i][this.m[i].length - 1 - i];
        }
        return aux;
    };
    matrizAleatoria.prototype.trianguloSuperiorPrincipal = function () {
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            for (var j = i + 1; j < this.c; j++) {
                aux.push(this.m[i][j]);
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.trianguloInferiorPrincipal = function () {
        var aux = [];
        for (var i = 1; i < this.m.length; i++) {
            for (var j = 0; j < i; j++) {
                aux.push(this.m[i][j]);
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.trianguloSuperiorSecundaria = function () {
        var aux = [];
        var n = this.m.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - 1 - i; j++) {
                aux.push(this.m[i][j]);
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.trianguloInferiorSecundaria = function () {
        var aux = [];
        var n = this.m.length;
        for (var i = 1; i < n; i++) {
            for (var j = n - 1 - i + 1; j < n; j++) {
                aux.push(this.m[i][j]);
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.transposta = function () {
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            aux[i] = [];
            for (var j = 0; j < this.c; j++) {
                aux[i][j] = this.m[j][i];
            }
        }
        return aux;
    };
    matrizAleatoria.prototype.multArrays = function (n) {
        var aux = [];
        for (var i = 0; i < this.m.length; i++) {
            aux[i] = [];
            for (var j = 0; j < this.c; j++) {
                aux[i][j] = n[i][j] * this.m[i][j];
            }
        }
        return aux;
    };
    return matrizAleatoria;
}());
exports.default = matrizAleatoria;
