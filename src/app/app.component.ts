import { Component } from '@angular/core';
import { Persona } from './Persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Pesonas';
  personas: Persona[] = [new Persona('John', 'Doe'), new Persona('John', 'Cage')];
  nombreInput: string;
  apellidoInput: string;

  onAgregarPersona() {
    const persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona);
  }
}
