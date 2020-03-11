import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../Persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from './../Personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  // nombreInput: string;
  // apellidoInput: string;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) { }   // para usar un service, tenemos que inyectarlo en el constructor (usando forma corta)

  onAgregarPersona() {
    const persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.sendConsoleMessage(`Persona agregada ${JSON.stringify(persona)}`);
    this.personasService.agregarPersona(persona);
  }
}
