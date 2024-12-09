export default class Segredo {
    private segredo: string;
    private senha: string;

    public constructor(segredo: string, senha: string) {
        this.segredo = segredo;
        this.senha = senha;
    }

    public Desvendar(senha:string): string {
        if (senha == this.senha) {
            return `${this.segredo}`;
        }   else {
            return `"Tente novamente!"`;
        }
    }
}