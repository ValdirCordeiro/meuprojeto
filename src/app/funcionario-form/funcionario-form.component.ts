import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 0;
  nome = 'Valdir';
  adicionado = false;
  // tslint:disable-next-line:no-output-rename
  @Output('criado') funcionarioAdicionado = new EventEmitter();


  adicionar() {
    console.log(`Adicionado ${this.nome}`);
    this.adicionado = true;

   const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}
