import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Vinho } from './../models/vinho';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {

  constructor(private httpClient: HttpClient) { }

  listar(): Promise<Array<Vinho>>{
    console.log("http://localhost:8080/api/")
    return this.httpClient.get('api/vinhos').toPromise().then(response => response as Array<Vinho>)
    .catch(this.tratarErro);
  }

  cadastrar(vinho: Vinho): Promise<Response>{
    return this.httpClient.post('api/vinhos', vinho).toPromise()
    .then(response => response)
    .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.log(erro);
    return Promise.reject(erro.message | erro);
  }  
  private criarVinho(id: number, nome: string, uva: string, classificacao: string, fabricante: string, anoSafra:number, paisOrigem: string): Vinho{
    let vinho:Vinho = new Vinho();
    vinho.id = id;
    vinho.nome = nome;
    vinho.uva = uva;
    vinho.classificacao = classificacao;
    vinho.fabricante = fabricante;
    vinho.anoSafra = anoSafra;
    vinho.paisOrigem = paisOrigem;
    return vinho;
  }

  buscar(id: number): Promise<Vinho>{
    return this.httpClient.get(`api/vinhos/${id}`)
    .toPromise()
    .then(response => response as Vinho)
    .catch(this.tratarErro);
  }

  atualizar(id: number, vinho: Vinho): Promise<Response>{
    return this.httpClient.put(`api/vinhos/${id}`, vinho)
    .toPromise()
    .then(response => response)
    .catch(this.tratarErro);
  }

  remover(id: number): Promise<Response> {
    return this.httpClient.delete(`api/vinhos/${id}`)
    .toPromise()
    .then(response => response)
    .catch(this.tratarErro);
  }

  //private header(): HttpHeaders {
   // return new HttpHeaders({ 'Content-Type': 'application/json' });
  //}
}
