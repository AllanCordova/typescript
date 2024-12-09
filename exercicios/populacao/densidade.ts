export default class Densidade {
    private area: number;
    private pessoas: number;

    public constructor(area: number, pessoas: number) {
        this.area = area;
        this.pessoas = pessoas;
    }

    public densidade(): number {
        return Math.floor(this.pessoas / this.area);
    }

    public toString(): string {
        return `A densidae populacional de ${this.pessoas} pessoas em uma área de ${this.area} km²\nDensidade: ${this.densidade()}hab/km²`;
    }
}