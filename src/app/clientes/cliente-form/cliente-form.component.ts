import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;

  constructor(private service: ClientesService) {
    this.cliente = service.getCliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente);
  }
}
