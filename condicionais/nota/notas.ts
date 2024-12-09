export default class Nota {
    private nota: number;

    public constructor(nota: number) {
        this.nota = nota;
    }

    public letra(): string {
        if (this.nota < 6) {
            return 'E';
        }
        if (this.nota < 7) {
            return 'D';
        }
        if (this.nota < 8) {
            return 'C';
        }
        if (this.nota < 9) {
            return 'B';
        }
        return 'A';
    }
}