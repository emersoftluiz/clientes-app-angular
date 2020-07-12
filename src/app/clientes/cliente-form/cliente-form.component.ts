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
  success: boolean = false;
  errors: string[];

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.cliente).subscribe(response => {
      this.success = true;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors);
    });
  }
}
