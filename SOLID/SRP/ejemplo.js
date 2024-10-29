/*
Single Responsibility Principle(SRP):

- Descripción: Este principio establece que cada clase o módulo debe tener una única responsabilidad o razón para cambiar. Debes implementar un ejemplo en el que una clase o módulo esté encargado de una única funcionalidad específica, evitando agrupar responsabilidades no relacionadas.

- TODO: Crea una clase o módulo que implemente una funcionalidad específica y asegúrate de que las responsabilidades no relacionadas se manejen en clases o módulos separados.
*/

import { Blog } from "./Blog.js";
import { ArticleElement } from "./ArticleElement.js";

const blog = new Blog();

blog.agregarEntrada({
  titulo: "Primera entrada",
  cuerpo: "Este es mi primer post del blog",
});

for (let entrada of blog.entradas) {
  const article = ArticleElement.render({ ...entrada });
  console.log(article);
}