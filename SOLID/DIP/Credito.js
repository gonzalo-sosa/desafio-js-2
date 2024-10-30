export class Credito {
  constructor(cuotas) {
    this.interes = 0.05;
    this.cuotas = cuotas;
  }
  realizarPago(Usuario, precio) {
    console.log(
      `${Usuario.nombre} pagó con crédito $${precio} a ${
        this.cuotas
      } cuotas de $${(precio / this.cuotas) * (1 + this.interes)} cada una.`
    );
  }
}
