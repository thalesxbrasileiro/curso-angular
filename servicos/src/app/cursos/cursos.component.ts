import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  // cursosService: CursosService;

  // Instância manual, sem usar a injeção de dependência
  // constructor() {
  //   this.cursosService = new CursosService();
  //  }
  
  constructor(private cursosService: CursosService) {
    this.cursosService = cursosService;;
   }
  
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      (curso: string) => this.cursos.push(curso)
    );
  }

}
