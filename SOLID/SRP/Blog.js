export class Blog {
  constructor() {
    this.entradas = [];
  }

  agregarEntrada(entrada) {
    this.entradas.push(entrada);
  }

  quitarEntrada(entrada) {
    let indice = this.entradas.indexOf(entrada);

    if (indice === -1) throw new Error("Entrada no existente.");

    this.entradas.splice(indice, 1);
  }
}
