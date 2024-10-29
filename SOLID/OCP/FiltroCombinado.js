export class FiltroCombinado {
  constructor(...filtros) {
    this.criterios = filtros;
  }

  filtrar(productos) {
    return this.criterios.every(({ filtro, contexto }) =>
      filtro.call(contexto, productos)
    );
  }
}
