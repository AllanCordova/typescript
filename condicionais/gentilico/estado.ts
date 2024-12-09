export default class Estado {
    private estado: string;

    public constructor(estado: string) {
        this.estado = estado;
    }

    public gentilico(): string {
        // Define as siglas dos estados
        type SiglaEstado = 
        | 'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' | 'ES' 
        | 'GO' | 'MA' | 'MT' | 'MS' | 'MG' | 'PA' | 'PB' | 'PR' 
        | 'PE' | 'PI' | 'RJ' | 'RN' | 'RS' | 'RO' | 'RR' | 'SC' 
        | 'SP' | 'SE' | 'TO';

        // Define o objeto usando Record
        const gentilicos: Record<SiglaEstado, string> = {
        AC: "acreano",
        AL: "alagoano",
        AP: "amapaense",
        AM: "amazonense",
        BA: "baiano",
        CE: "cearense",
        DF: "brasiliense",
        ES: "capixaba",
        GO: "goiano",
        MA: "maranhense",
        MT: "mato-grossense",
        MS: "sul-mato-grossense",
        MG: "mineiro",
        PA: "paraense",
        PB: "paraibano",
        PR: "paranaense",
        PE: "pernambucano",
        PI: "piauiense",
        RJ: "fluminense",
        RN: "potiguar",
        RS: "gaúcho",
        RO: "rondoniense",
        RR: "roraimense",
        SC: "catarinense",
        SP: "paulista",
        SE: "sergipano",
        TO: "tocantinense"
        };

        if (this.estado.toUpperCase() in gentilicos) {
            return gentilicos[this.estado.toUpperCase()];
        } else {
            return `Não consta no Brasil`;
        }
    }

    public toString(): string {
        return `Sigla ${this.estado.toUpperCase()}: Gentílico ${this.gentilico()}`;
    }
}