import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataHoje = new Date();
  nome:string = "Armandinho";
  title = 'gestao-vinhos';
}
