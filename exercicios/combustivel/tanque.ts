//modulando um tanque de um carro para abastecimento informando o tamanho do tanque e adicionando modulos para encher o tanque do carro

export default class Tanque {
    private volume: number;
    private quant: number;

    public constructor(volume: number, quant: number = 0) {
        this.volume = volume;
        this.quant = quant;
    }

    public encher(): void {
        this.quant = (this.volume - this.quant) + this.quant;
    }

    public escolha(valor: number): void {
        this.quant = valor;
    }

    public percentual() {
        return (this.quant * 100) / this.volume;
    }

    public toString(): string{
        return `Quantidade de combustivel: ${this.quant} Litros\nTamanho do tanque: ${this.volume} Litros\nTanque está ${this.percentual().toFixed(2)}% cheio`;
    }
 }
