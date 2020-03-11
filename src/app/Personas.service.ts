import { Persona } from './Persona.model';

export class PersonasService {
  personas: Persona[] = [new Persona('John', 'Doe'), new Persona('John', 'Cage')];

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }
}
