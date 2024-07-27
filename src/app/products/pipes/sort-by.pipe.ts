import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  /* Con el keyof se basa en las propiedades de esa interfaz */
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    switch (sortBy) {
      case 'name':
        /* Sort es un método de javascript que pide una función de comparación, en este caso por nombre*/
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heroes;
    }
  }
}
