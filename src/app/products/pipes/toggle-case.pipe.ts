import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  /* Operador rest ...args, según la documentación para los demás arguemntos del pipe */
  /* Lo recomendado son 3 argumentos, si son más de 3 lo mejor es recibir un objeto */
  transform(value: string, toUpper:boolean = false):string {
    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}
