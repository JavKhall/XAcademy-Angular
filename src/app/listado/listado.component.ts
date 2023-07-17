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
      name: 'iPhone 9',
      price: 549
    },
    {
      name: 'OPPOF19',
      price: 280
    },
    {
      name: 'MacBook Pro',
      price: 1749
    },
    {
      name: 'Samsung S23',
      price: 1800
    },
    {
      name: 'Samsung Galaxy Book',
      price: 1499
    },
    {
      name: 'Microsoft Surface Laptop 4',
      price: 1499
    },
    {
      name: 'HP Pavilion 15-DK1056WM',
      price: 1099
    }
  ]
}
