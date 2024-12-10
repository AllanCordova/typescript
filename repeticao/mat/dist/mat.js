export default class InteiroMatematico {
    constructor(numero) {
        this.n = numero;
    }
    tabuada() {
        for (let i = 1; i < 11; i++) {
            console.log(`${this.n} x ${i} = ${this.n * i}`);
        }
    }
    numeroDeDivisores() {
        let cont = 2;
        let i = 2;
        while (i <= this.n / 2) {
            if (this.n % i == 0) {
                cont += 1;
            }
            i++;
        }
        return cont;
    }
    produtoPelaSoma(m) {
        if (m > this.n) {
            let aux = this.n;
            this.n = m;
            m = aux;
        }
        let som = 0;
        for (let i = 1; i <= m; i++) {
            som += this.n;
        }
        return som;
    }
    elevado(exp) {
        if (exp <= 0) {
            return 0;
        }
        let mult = 1;
        for (let i = 1; i <= exp; i++) {
            mult *= this.n;
        }
        return mult;
    }
    fatorial() {
        let fat = this.n;
        for (let i = this.n - 1; i > 1; i--) {
            fat *= i;
        }
        return fat;
    }
    serieHarmonica() {
        let harm = 1;
        for (let i = 2; i < this.n; i++) {
            harm = harm + (1 / i);
        }
        return harm;
    }
    fibonacci() {
        let last = 1;
        let next = 1;
        for (let i = 2; i < this.n; i++) {
            const aux = next;
            next += last;
            last = aux;
        }
        return next;
    }
    tribonacci() {
        let last = 1, mid = 1, next = 2;
        for (let i = 3; i < this.n; i++) {
            const auxN = next;
            const auxM = mid;
            next += mid + last;
            mid = auxN;
            last = auxM;
        }
        return next;
    }
    isTriangular() {
        let mult = 1;
        let i = 1;
        while (mult < this.n) {
            mult = i * (i + 1) * (i + 2);
            i++;
        }
        return (mult == this.n);
    }
    isSomaDosQuadrados() {
        let cent = Math.floor(this.n / 100), dez = this.n % 100;
        const quadrado = Math.pow((cent + dez), 2);
        return (quadrado == this.n);
    }
    maiorDivisor() {
        if (this.n <= 1) {
            return 1;
        }
        let maior = 0;
        for (let i = 2; i <= this.n / 2; i++) {
            if (this.n % i == 0) {
                maior = i;
            }
        }
        return maior;
    }
    menorDivisor() {
        if (this.n <= 1) {
            return 1;
        }
        for (let i = 2; i <= this.n / 2; i++) {
            if (this.n % i == 0) {
                return i;
            }
        }
        return 1;
    }
    mdc(m) {
        let mdc = 1, div = 2;
        while (this.n > 1 && m > 1) {
            if (this.n % div == 0 && m % div == 0) {
                mdc *= div;
            }
            if (this.n % div == 0) {
                this.n /= div;
                div = 2;
            }
            if (m % div == 0) {
                m /= div;
                div = 2;
            }
            if (!(m % div == 0 && this.n % div == 0)) {
                div += 1;
            }
        }
        return mdc;
    }
    mdcEficiente(m) {
        let dividendo = Math.max(this.n, m), divisor = Math.min(this.n, m), mdc = divisor, resto = dividendo % divisor;
        while (resto != 0) {
            dividendo = divisor;
            divisor = resto;
            if (divisor > 0) {
                mdc = divisor;
            }
            resto = dividendo % divisor;
        }
        return mdc;
    }
}
