export default class matrizAleatoria {
  public c: number;
  public r: number;
  private m: number[][];

  public constructor(linhas: number, colunas: number) {
    this.c = colunas;
    this.r = linhas;
    this.m = [];

    for (let i: number = 0; i < this.r; i++) {
      this.m[i] = [];
      for (let j: number = 0; j < this.c; j++) {
        this.m[i][j] = Math.ceil(Math.random() * 100);
      }
    }
  }

  public toString(array: number[][]): void {
    for (let i: number = 0; i < this.m.length; i++) {
      console.log(`${array[i]}\n`);
    }
  }

  public somaLinhaColuna(): number[][] {
    for (let i: number = 0; i < this.r; i++) {
      for (let j: number = 0; j < this.c; j++) {
        this.m[i][j] = i + j;
      }
    }

    return this.m;
  }

  public multiplicaPor(n: number): void {
    for (let i: number = 0; i < this.m.length; i++) {
      for (let j: number = 0; j < this.c; j++) {
        this.m[i][j] *= n;
      }
    }
  }

  public somaCom(n: number[][]): number[][] {
    if (n.length != this.r) {
      return [];
    }
    if (n[0].length != this.c) {
      return [];
    }

    let aux: number[][] = [];

    for (let i: number = 0; i < this.m.length; i++) {
      aux[i] = [];
      for (let j: number = 0; j < this.c; j++) {
        aux[i][j] = this.m[i][j] + n[i][j];
      }
    }

    return aux;
  }

  public binaria(): number[][] {
    let aux: number[][] = [];
    for (let i: number = 0; i < this.m.length; i++) {
      aux[i] = [];
      for (let j: number = 0; j < this.c; j++) {
        aux[i][j] = this.m[i][j] % 2;
      }
    }

    return aux;
  }

  public diagonalPrincipal(): number[] {
    let aux: number[] = [];
    for (let i: number = 0; i < this.m.length; i++) {
      aux[i] = this.m[i][i];
    }
    return aux;
  }

  public diagonalSecundaria(): number[] {
    let aux: number[] = [];
    for (let i: number = 0; i < this.m.length; i++) {
      aux[i] = this.m[i][this.m[i].length - 1 - i];
    }
    return aux;
  }

  public trianguloSuperiorPrincipal(): number[] {
    let aux: number[] = [];
    for (let i = 0; i < this.m.length; i++) {
      for (let j = i + 1; j < this.c; j++) {
        aux.push(this.m[i][j]);
      }
    }
    return aux;
  }

  public trianguloInferiorPrincipal(): number[] {
    let aux: number[] = [];
    for (let i: number = 1; i < this.m.length; i++) {
      for (let j: number = 0; j < i; j++) {
        aux.push(this.m[i][j]);
      }
    }
    return aux;
  }

  public trianguloSuperiorSecundaria(): number[] {
    let aux: number[] = [];
    let n = this.m.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        aux.push(this.m[i][j]);
      }
    }
    return aux;
  }

  public trianguloInferiorSecundaria(): number[] {
    let aux: number[] = [];
    let n = this.m.length;
    for (let i = 1; i < n; i++) {
      for (let j = n - 1 - i + 1; j < n; j++) {
        aux.push(this.m[i][j]);
      }
    }
    return aux;
  }

  public transposta(): number[][] {
    let aux: number[][] = [];
    for (let i: number = 0; i < this.m.length; i++) {
      aux[i] = [];
      for (let j: number = 0; j < this.c; j++) {
        aux[i][j] = this.m[j][i];
      }
    }
    return aux;
  }

  public multArrays(n: number[][]): number[][] {
    let aux: number[][] = [];
    for (let i: number = 0; i < this.m.length; i++) {
      aux[i] = [];
      for (let j: number = 0; j < this.c; j++) {
        aux[i][j] = n[i][j] * this.m[i][j];
      }
    }
    return aux;
  }
}
