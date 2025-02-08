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
  @Output() productCreated = new EventEmitter<Iproduct>();
  name: string = '';
  Price: number = 0;
  image: 'https://www.cycolinks.com/cdn/shop/files/3678392343400748807_2048_900x.jpg?v=1724428452';
  description: string = '';

  onAddProduct() {
    const product: Iproduct = {
      name: this.name,
      image:
        'https://www.cycolinks.com/cdn/shop/files/3678392343400748807_2048_900x.jpg?v=1724428452',
      price: this.Price,
      description: this.description,
    };
    this.productCreated.emit(product);
    this.name = '';
    this.Price = 0;
    this.description = '';
  }
}
