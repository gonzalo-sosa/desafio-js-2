export class Tienda {
  constructor(procesadorDePagos) {
    this.ProcesadorDePagos = procesadorDePagos;
  }

  comprarArticulo(precio, cantidad) {
    this.ProcesadorDePagos.pagar(precio * cantidad);
  }
}
