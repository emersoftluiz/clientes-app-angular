import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;
  nome: string = 'Fulano';

  constructor() {
    this.cliente = new Cliente;
    this.cliente.nome = 'Emerson';
  }

  ngOnInit(): void {
  }

  clicar(){
    console.log('Cliquei!');
  }
}
