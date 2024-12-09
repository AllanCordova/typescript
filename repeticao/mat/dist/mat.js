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
        }
        return (mult == this.n);
    }
}
