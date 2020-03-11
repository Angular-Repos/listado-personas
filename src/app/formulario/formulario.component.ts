import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../Persona.model';
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
    private personasService: PersonasService
  ) { }   // para usar un service, tenemos que inyectarlo en el constructor (usando forma corta)

  onAgregarPersona() {
    const persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personasService.agregarPersona(persona);
  }
}
