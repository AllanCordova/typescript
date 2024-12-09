export default class Comprimento {
    private nome: string;
    private  amigo: boolean;
    public constructor(nome: string = 'Desconhecido', amigo: boolean = false) {
        this.nome = nome;
        this.amigo = amigo;
    }

    public desconhece() {
        return `"Olá!"`;
    }

    public sabeNome(nome: string) {
        this.nome = nome
        return `"Olá, ${this.nome}!"`;
    }

    public conhece(amigo: boolean) {
        this.amigo = amigo;
        if (this.amigo) {
            return `"Olá, ${this.nome}"`;
        } else {
            return `A pessoa não te conheçe`;
        }
    }
}