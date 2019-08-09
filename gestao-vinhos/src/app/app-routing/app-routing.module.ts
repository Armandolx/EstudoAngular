import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { DetalheVinhoComponent } from '../components/detalhe-vinho/detalhe-vinho.component';
import { VinhosComponent } from '../components/vinhos/vinhos.component';
import { CadastroVinhoComponent } from '../components/cadastro-vinho/cadastro-vinho.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/vinhos',
    pathMatch: 'full'
  },
  {
    path: 'vinhos', 
    component: VinhosComponent
  },
  {
    path: 'cadastro-vinho',
    component: CadastroVinhoComponent
  },
  {
    path: 'cadastro-vinho/:id',
    component: CadastroVinhoComponent
  },
  {
    path: 'detalhe-vinho/:id',
    component: DetalheVinhoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
