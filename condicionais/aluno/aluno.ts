export default class Notas {
    private semestreUm: number;
    private semestreDois: number;
    private exame: number;
    
    public constructor(semestreUm: number, semestreDois: number, exame: number) {
        this.semestreUm = semestreUm;
        this.semestreDois = semestreDois;
        this.exame = exame;
    }

    public semestre(): number {
        if (this.semestreUm > this.semestreDois) {
            return this.semestreUm;
        }   else {
            return this.semestreDois;
        }
    }

    public maiorNota(): number {
        if (this.semestre() > this.exame) {
            return this.semestre();
        }   else {
            return this.exame;
        }
    }
}