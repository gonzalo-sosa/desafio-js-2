import { Credito } from "./Credito.js";

export class ProcesadorDePagosCredito {
  constructor(usuario, cuotas) {
    this.Usuario = usuario;
    this.Credito = new Credito(cuotas);
  }

  pagar(precio) {
    this.Credito.realizarPago(this.Usuario, precio);
  }
}
