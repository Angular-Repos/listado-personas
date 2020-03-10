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

  onPersonaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
