export default class InteiroMatematico {
    private n: number;

    public constructor(numero: number) {
        this.n = numero;
    }

    public getDivisores():Array<number> {
        let divisores: Array<number> = [1];
        for (let i: number = 2; i <= this.n / 2; i++) {
            if (this.n % i == 0) {
                divisores.push(i);
            }
        }
        divisores.push(this.n);
        return divisores;
    }

    public serieDeFibonacci():Array<number> {
        let fibonacci: Array<number> = [1, 1],
        last: number = 1,
        next: number = 1;
        for (let i:number = 2;i < this.n; i++) {
            let temp: number = next;
            next += last;
            last = temp;
            fibonacci.push(next);
        }
        return fibonacci;
    }

    public serieDeTribonacci():Array<number> {
        let tribonacci: Array<number> = [1, 1, 2],
        last: number = 1,
        mid: number = 1,
        next: number = 2;
        for (let i: number = 3; i< this.n; i++) {
            const auxOne: number = next;
            const auxTwo: number = mid;
            next += mid + last;
            mid = auxOne;
            last = auxTwo;
            tribonacci.push(next);
        }
        return tribonacci;
    }

    public getPrimos(): Array<number> {
        let primos: Array<number> = [],
        isPrimo: boolean = true;
        let num = 2;
        while(num <= this.n) {
            for (let i: number = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrimo = false;
                }
            }
            if(isPrimo) {
                primos.push(num);
            }
            isPrimo = true;
            num ++;
        }

        return primos;
    }
}