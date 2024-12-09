export default class Imposto {
    private saldo: number;

    public constructor(renda: number) {
        this.saldo = renda;
    }

    public aliquota(): number {
        let imposto: number = 0;
        if (this.saldo <= 2112) {
            return imposto;
        }
        if (this.saldo <= 3169) {
            return imposto = 7.5;
        }
        if (this.saldo <= 4257) {
            return imposto = 15;
        }
        if (this.saldo <= 5345) {
            return imposto = 22.5;
        } else {
            return imposto = 27.5;
        }
    }

    public novaRenda(): number {
        const saldo: number = this.saldo - (this.saldo * (this.aliquota() / 100));
        return saldo;
    }

    public toString(): string {
        return `Com uma aliquota de ${this.aliquota()}\nUm salário de R$${this.saldo}\nNovo saldo: R$${this.novaRenda().toFixed(2)}`;
    }
}