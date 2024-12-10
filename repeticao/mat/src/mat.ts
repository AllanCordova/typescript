export default class InteiroMatematico {
    private n: number;

    public constructor(numero: number) {
        this.n = numero;
    }

    public tabuada(): void {
        for (let i: number = 1; i < 11; i++) {
            console.log(`${this.n} x ${i} = ${this.n * i}`);
        }
    }

    public numeroDeDivisores(): number {
        let cont: number = 2;
        let i: number = 2;

        while (i <= this.n / 2) {
            if (this.n % i == 0) {
                cont += 1
            }
            i ++
        }
        return cont;
    }

    public produtoPelaSoma(m: number): number {
        if (m > this.n) {
            let aux: number = this.n;
            this.n = m;
            m = aux;
        }
    
        let som: number = 0;

        for (let i: number = 1; i <= m; i++) {
            som += this.n
        }
        return som;
    }

    public elevado(exp: number): number {
        if (exp <= 0) {
            return 0;
        }

        let mult: number = 1;
        for (let i: number = 1; i <= exp; i++) {
            mult *= this.n
        }
        return mult;
    }

    public fatorial(): number {
        let fat: number = this.n;

        for (let i: number = this.n - 1; i > 1; i--) {
            fat *= i;
        }
        return fat;
    }


    public serieHarmonica(): number {
        let harm: number = 1;

        for(let i: number = 2; i < this.n; i++) {
            harm = harm + (1 / i);
        }
        return harm;
    }

    public fibonacci(): number {
        let last: number = 1;
        let next: number = 1;

        for (let i: number = 2; i < this.n; i++) {
            const aux: number = next;
            next += last;
            last = aux;
        }
        return next;
    }

    public tribonacci(): number {
        let last: number = 1,
            mid: number = 1,
            next: number = 2;
        
        for (let i: number = 3; i < this.n; i++) {
            const auxN: number = next;
            const auxM: number = mid;
            next += mid + last;
            mid = auxN;
            last = auxM;
        }
        return next;
    }

    public isTriangular(): boolean {
        let mult: number = 1;
        let i: number = 1;

        while(mult < this.n) {
            mult = i * (i + 1) * (i + 2);
            i++
        }

        return (mult == this.n);
    }

    public isSomaDosQuadrados(): boolean {
        let cent: number = Math.floor(this.n / 100),
            dez: number = this.n % 100;
        const quadrado: number = (cent + dez) ** 2;
        
        return (quadrado == this.n);
    }

    public maiorDivisor(): number {
        if (this.n <= 1) {
            return 1;
        }
        let maior: number = 0;
        for (let i: number = 2; i <= this.n / 2; i++) {
            if (this.n % i == 0) {
                maior = i;
            }
        }

        return maior;
    }

    public menorDivisor(): number {
        if (this.n <= 1) {
            return 1;
        }
        for (let i: number = 2; i <= this.n / 2; i++) {
            if (this.n % i == 0) {
                return i;
            }
        }
        return 1;
    }

    public mdc(m: number): number {
        let mdc: number = 1,
            div: number = 2;
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

    public mdcEficiente(m: number): number {
        let dividendo: number = Math.max(this.n, m),
            divisor: number = Math.min(this.n, m),
            mdc: number = divisor,
            resto: number = dividendo % divisor;
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