import { Component } from '@angular/core';
import { PRODUCTS } from '../app/Data/db-product';
import { Iproduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'full-demo';
  productItems= PRODUCTS;

  onAddProducts(productData:Iproduct) {
    PRODUCTS.push(productData)
  }
}
