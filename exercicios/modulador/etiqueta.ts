// modelar um objeto de supermercado e um programa que retorne uma etiqueta formatada com
// os atríbutos do produto.
// onde temos Descrição, Peso, Preço
// temos um metódo para calcular o preço por kg

export default class Produto {
    private desc: string;
    private peso: number;
    private preco: number;

    public constructor(desc: string, peso: number, preco:number) {
        this.desc = desc;
        this.peso = peso;
        this.preco = preco;
    }

    public setDesc(value: string): void {
        this.desc = value;
    }

    public setPeso(value: number): void {
        this.peso = value;
    }

    public setPreco(value: number): void {
        this.preco = value;
    }

    public precoKg() {
        return this.preco / this.peso
    }

    public toString(): string {
        return `${this.desc}\npeso: ${this.peso.toFixed(3)}\npreço: ${this.preco.toFixed(2)}\npreço do kilo: ${this.precoKg().toFixed(2)}`;
    }
}