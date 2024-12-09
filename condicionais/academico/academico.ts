export default class Academico {
    private nota: number;
    private frequencia: number;

    public constructor(nota: number, frequencia: number) {
        this.nota = nota;
        this.frequencia = frequencia;
    }

    public aprovado(): string {
        if (this.nota >= 6 && this.frequencia >= 0.75) {
            return `Aprovado por nota e frequência`;
        } else {
            if (this.nota >= 4 && this.frequencia >= 0.75) {
                return `Reprovado sem frequência obrigatória`
            } else {
                return `Reprovado com frequência obrigatória`
            }
        }
    }
}