import { Component, OnInit } from '@angular/core';

import { Vinho } from './../../models/vinho'

import { VinhosService } from './../../services/vinhos.service'
import { Router } from '@angular/router';
import { Notificacao } from '../../models/notificacao';
import { NotificacaoService } from '../../services/notificacao.service';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;
  campoBusca:string;
  
  constructor(public notificacaoService: NotificacaoService, public router: Router, public vinhosService: VinhosService){
  
  }

  ngOnInit() {
    this.listar();
  }

  private listar(){
    this.vinhosService.listar()
    .then((vinhos: Array<Vinho>) => {
      this.vinhos = vinhos;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  selecionar(vinho: Vinho) {
    this.vinhoSelecionado = vinho;
  }

  visualizar() {
    this.router.navigate(['/detalhe-vinho', this.vinhoSelecionado.id]);
  }
  
  editar() {
    this.router.navigate(['/cadastro-vinho', this.vinhoSelecionado.id]);
  }

  remover() {
    this.vinhosService.remover(this.vinhoSelecionado.id)
    .then(response => {
      let notificacao: Notificacao = new Notificacao();
      this.notificacaoService.alerta('Vinho removido com sucesso');
      
    }).catch(erro => console.log(erro));
    this.listar();
    this.vinhoSelecionado=null;
  }

}
