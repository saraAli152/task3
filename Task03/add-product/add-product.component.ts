import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Iproduct } from '../../models/product';
import { PRODUCTS } from '../../Data/db-product';

@Component({
  selector: 'app-add-product',
  standalone: false,

  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  newproduct: Iproduct;
  @Output() productCreated = new EventEmitter<Iproduct[]>();

  onAddProducts() {
    PRODUCTS.push({ ...this.newproduct });
    this.productCreated.emit(PRODUCTS);
  }
}
