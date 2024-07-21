import { Component } from '@angular/core';

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
}
