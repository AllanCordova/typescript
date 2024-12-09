export default class Figura {
    private medida: number

    public constructor(medida: number = 0) {
        this.medida = medida;
    }

    public tIsreal(co: number, ca: number, hp: number): boolean {
        const array: Array<number> = [co, ca, hp];
        const newArray = array.sort();
        return (newArray[2]++ + newArray[1]++ > newArray[0]++);
    }
}