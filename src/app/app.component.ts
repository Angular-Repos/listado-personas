import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona.model';
import { PersonasService } from './Personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de Pesonas';
  personas: Persona[];

  ngOnInit() {
    this.personas = this.personasService.personas;
  }

  constructor(public personasService: PersonasService) {}
}
