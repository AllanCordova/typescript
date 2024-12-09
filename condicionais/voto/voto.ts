export default class Voto {
    private idade: number;
    private estrangeiro: boolean;

    public constructor(idade: number, estrangeiro: boolean) {
        this.idade = idade;
        this.estrangeiro = estrangeiro;
    }

    public situacao():string {
        if (this.estrangeiro || this.idade < 16 || this.idade > 70) {
            return `Voto negado!`;
        } else {
            if (this.idade > 17) {
                return `Voto obrigatório`;
            } else {
                return `Voto facultativo`;
            }
        }
    }
}