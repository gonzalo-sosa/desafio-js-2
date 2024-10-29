import { Debito } from "./Debito.js";

export class ProcesadorDePagosDebito {
  constructor(usuario) {
    this.Usuario = usuario;
    this.Debito = new Debito();
  }

  pagar(precio) {
    this.Debito.realizarPago(this.Usuario, precio);
  }
}
