import { Component, Input } from '@angular/core';
import { Persona } from '../Persona.model';
import { PersonasService } from '../Personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona: Persona;    // recibir atributos desde el componente padre
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  emitirSaludo() {
    this.personasService.saludar.emit(this.indice);   // nos sirve para poder enviar información entre componentes a través de un servicio general
  }

}
