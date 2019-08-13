import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { VinhosService } from './services/vinhos.service';
import { NotificacaoService } from './services/notificacao.service';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VinhoApi } from './vinho-api';
import { CadastroVinhoComponent } from './components/cadastro-vinho/cadastro-vinho.component';
import { DetalheVinhoComponent } from './components/detalhe-vinho/detalhe-vinho.component';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';
import { FiltroTabelaPipe } from './pipes/filtro-tabela.pipe';
import { DestacarEstiloDirective } from './diretivas/destacar-estilo.directive';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroVinhoComponent,
    DetalheVinhoComponent,
    NotificacaoComponent,
    FiltroTabelaPipe,
    DestacarEstiloDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(VinhoApi),
    AppRoutingModule
  ],
  providers: [VinhosService, NotificacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
