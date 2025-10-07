import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-farm-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farm-wallet.component.html',
  styleUrl: './farm-wallet.component.css'
})
export class FarmWalletComponent {

  @Input() products: Product[] = [];
  @Output() close = new EventEmitter<void>();

  get soldProducts() {
    return this.products.filter(product => product.isSold);
  }

  get totalEarnings(): number {
    return this.soldProducts.reduce((sum, product) => sum + product.price, 0);
  }

  get numberOfSales(): number {
    return this.soldProducts.length;
  }
}
