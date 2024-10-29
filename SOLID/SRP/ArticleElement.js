export class ArticleElement {
  static render({ titulo, cuerpo }) {
    return `<article><h2>${titulo}</h2><p>${cuerpo}</p></article>`;
  }
}
