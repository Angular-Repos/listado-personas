import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../Persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]   // para poder inyectarlo, tenemos que configurarlo en los providers
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();    // para emitir un evento de un hijo a un padre
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  // nombreInput: string;
  // apellidoInput: string;

  constructor(private loggingService: LoggingService) { }   // para usar un service, tenemos que inyectarlo en el constructor (usando forma corta)

  onAgregarPersona() {
    const persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.sendConsoleMessage(`Persona agregada ${JSON.stringify(persona)}`);
    this.personaCreada.emit(persona);
  }
}
