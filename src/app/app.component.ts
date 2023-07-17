import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjercicioAngular';

  mostrar: boolean = false;

  mostrarLista() {
    this.mostrar= !this.mostrar
    console.log(this.mostrar);
  }
}