import { Persona } from './Persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable } from '@angular/core';

@Injectable()   // para injectar un componente en otro, tenemos que usar este decorador desde angular/core
export class PersonasService {
  personas: Persona[] = [new Persona('John', 'Doe'), new Persona('John', 'Cage')];

  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.sendConsoleMessage(`Persona agregada ${JSON.stringify(persona)}`);
    this.personas.push(persona);
  }
}
