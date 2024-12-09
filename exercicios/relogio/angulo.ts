export default class Angulo {
    private relogio: number;
    private minuto: number;

    public constructor(anguloR: number, anguloM: number) {
        this.relogio = anguloR;
        this.minuto = anguloM;
    }

    public angRelogio(): number {
        if (this.relogio == 12 && this.minuto == 0 || this.relogio == 24 && this.minuto == 0) {
            return this.relogio = 0;
        } else{
            if (this.relogio == 12 && this.minuto > 0 || this.relogio == 24 && this.minuto > 0) {
                return this.relogio = this.minuto * 0.5;
            } else {
                if (this.relogio > 12) {
                    this.relogio = (this.relogio - 1) / 2;
                    return (this.relogio * 30) + (this.minuto * 0.5);
                } else {
                    return (this.relogio * 30) + (this.minuto * 0.5);
                }
            }
        }
    }

    public angMinuto(): number {
        if (this.minuto == 60) {
            return this.minuto = 0;
        } else {
            return (this.minuto * 6);
        }
    }

    public toString(): string {
        return `Angulação do ponteiro de horas é de ${this.angRelogio()}\nAngulação do ponteiro de minutos é de ${this.angMinuto()}`;
    }
}

