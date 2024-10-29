export class Debito {
  constructor() {}

  realizarPago(Usuario, precio) {
    console.log(`${Usuario.nombre} pagó con débito $${precio}.`);
  }
}
