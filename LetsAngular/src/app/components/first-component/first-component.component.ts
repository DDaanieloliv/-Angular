import { Component, OnInit } from '@angular/core';


@Component({  // Decorator
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  
  caracteristica1: string = 'Componentes: Modularidade';
  hour: number = 0;
  caracteristica2 = 'Two-way Data Binding: Sincronia';
 
  caracteristica3 = 'Arquitetura MVVM: Organização';

  caracteristica4 = 'Desenvolvimento Front-end: Responsividade';

  vetor = [1, "3", '2', `[array]`];
 
  objecto = {
    n1: '{Objeto} (Que pode gardar tanto String como Numero.)',
    n2: '{Objeto} (Que pode gardar tanto String como Numero..)',
    n3: 0,
  }

  constructor() {}

  ngOnInit(): void {
    
  }
}

//  O método ngOnInit() é útil para executar tarefas que devem ocorrer 
//  quando o componente é inicializado, como buscar dados de um servidor, 
//  configurar variáveis, ou realizar outras operações necessárias no momento da inicialização.