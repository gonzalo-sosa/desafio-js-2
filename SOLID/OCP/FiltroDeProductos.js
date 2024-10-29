export class FiltroDeProductos {
  filtrar(productos, filtro, contexto) {
    return productos.filter((p) => filtro.call(contexto, p));
  }
}
