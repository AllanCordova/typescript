export default class Dado {
    private faces: number;
    private sort: number;
    public constructor(faces: number, sort:number = 0) {
        this.faces = faces;
        this.sort = sort;
    }

    public rolagem():void {
        this.sort = Math.floor((Math.random() * this.faces) + 1);
        this.lastSort();
    }

    private lastSort(): number {
        const lastSort = this.sort;
        return lastSort;
    }

    public toString(): string {
        return `Com as rolagems do dado de ${this.faces} faces, o ultimo valor sorteado foi de ${this.lastSort()}`;
    }
}

