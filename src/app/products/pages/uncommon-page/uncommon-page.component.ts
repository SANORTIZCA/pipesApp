import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  /* InvitationMap es un objeto literal */
  public invitationMap: {[key:string]:string} = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  /* Dependiendo del valor al que sea igual se coloca una frase  */

  /* La propiedad clientsMap es un objeto cuyas claves son de tipo string y sus valores también son de tipo string. En TypeScript, esto se denota como {[key:string]:string}. */
  public clientsMap: { [key: string]: string } = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  //Key Value Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe sirve para promesas y también para observables
  /* interval() es una forma de crear un observable que empieza a emitir valores desde 1,2,3,4,5... basado en la cantidad de tiempo que queramos definir*/
  public myObservalbeTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value)),
  );

  /* Async Pipe con promesas, las promesas no se pueden cancelar */
  public promiseValue:  Promise <string>= new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
