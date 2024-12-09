export default class Calculadora {
    private time: number;
    private caracter: number;

    public constructor(tempo: number = 0, letras: number = 0) {
        this.time = tempo;
        this.caracter = letras;
    }

    public forMinuto(): number {
        if (this.time == 0) {
            return 0;
        } 
        
        const timeMinutos: number = this.time / 60;
        return this.caracter/ timeMinutos;
    }
}