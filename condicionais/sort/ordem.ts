export default class Ordem {
    private aux: number;

    public constructor(n: number = 0) {
        this.aux = n;
    }

    public sort(a: number, b: number, c: number): string {
        if (a > c && b > c) {
            const maior: number = Math.max(a, b);
            const menor: number = Math.min(a, b);
            this.aux = c;
            c = maior;
            b = menor;
            a = this.aux;
            return `${a}, ${b}, ${c}`;
        }
        if (a > b) {
            const maior: number = Math.max(a, c);
            const menor: number = Math.min(a, c);
            this.aux = b;
            c = maior
            b = menor;
            a = this.aux;
            return `${a}, ${b}, ${c}`;
        }
        const maior: number = Math.max(b, c);
        const menor: number = Math.min(b, c);
        c = maior;
        b = menor;
        return `${a}, ${b}, ${c}`;
    }
}