export default class Numeros {
    private n: number;

    public constructor(n: number) {
        this.n = n;
    }

    public isEven(): boolean {
        return (this.n % 2 == 0);
    }
}