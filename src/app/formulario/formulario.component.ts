import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../Persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();    // para emitir un evento de un hijo a un padre
  nombreInput: string;
  apellidoInput: string;

  constructor() { }

  onAgregarPersona() {
    const persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona);
  }
}
