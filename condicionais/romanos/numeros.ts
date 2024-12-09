export default class Numeros {
    private numero: number;

    public constructor(numero: number) {
        this.numero = numero;
    }

    public romano(): string {
        switch (this.numero) {
            case 1: return 'I';
            case 2: return 'II';
            case 3: return 'III';
            case 4: return 'IV';
            case 5: return 'V';
            case 6: return 'VII';
            case 7: return 'VII';
            case 8: return 'VIII';
            case 9: return 'IX';
            case 10: return 'X';
        }
        return 'fora de intervalo!';
    }
}