export function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

export function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}
