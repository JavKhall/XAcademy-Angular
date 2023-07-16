import { Component } from '@angular/core';

type Producto = {
  name: string;
  price: number;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})



export class ListadoComponent {
  listado: Producto[] = [
    {
      name: 'Samsung S20',
      price: 1500
    },
    {
      name: 'Samsung S21',
      price: 1600
    },
    {
      name: 'Samsung S22',
      price: 1700
    },
    {
      name: 'Samsung S23',
      price: 1800
    }
  ]
}
