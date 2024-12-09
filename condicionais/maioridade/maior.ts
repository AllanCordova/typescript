export default class Demaior {
    private nascimento: number;

    public constructor(ano: number) {
        this.nascimento = ano;
    }

    public idade(): number {
        let idade: number = new Date().getFullYear();
        idade -= this.nascimento;
        return idade;
    }

    public deMaior(): boolean {
        if (this.idade() > 17) {
            return true;
        } else {
            return false;
        }
    }

    public toString(): string {
        if (this.deMaior()) {
            return `Indíviduo maior de idade com ${this.idade()} anos`;
        } else {
            return `Indívidui menor de idade com ${this.idade()} anos`;
        }
    }
}