export default class Venda {
    private precoQuer: number;
    private taxa: number;

    public constructor(precoEsperado: number, taxa: number) {
        this.precoQuer = precoEsperado;
        this.taxa = taxa;
    }

    public valorPedido(): number {
        const valorEsperado = (this.precoQuer * (this.taxa / 100 )) + this.precoQuer;
        return valorEsperado;
    }

    public toString(): string {
        return `Com o valor esperado de venda de ${this.precoQuer} a uma taxa de ${this.taxa}\nO valor de venda deve ser: ${this.valorPedido()}`;
    }
}
