import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/Product';
import { FarmWalletComponent } from '../farm-wallet/farm-wallet.component';

@Component({
  selector: 'app-my-farm',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, FarmWalletComponent],
  templateUrl: './my-farm.component.html',
  styleUrl: './my-farm.component.css',
})
export class MyFarmComponent {
  isModalOpen = false;
  showWallet = false;
  products: Product[] = [];

  newProduct: Product = {
    id: '',
    name: '',
    price: 0,
    category: '',
    location: '',
    image: '',
    phoneNumber: 0,
  };

  openAddProductModal() {
    this.resetForm();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  editProduct(product: Product) {
    // Open a modal or form to edit the selected product
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      // call your delete service
    }
  }

  markAsSold(product: Product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index].isSold = true;
    }
  }

  submitProduct() {
    const productToAdd = { ...this.newProduct, id: crypto.randomUUID() };
    this.products.push(productToAdd);
    this.closeModal();
  }

  resetForm() {
    this.newProduct = {
      id: '',
      name: '',
      price: 0,
      category: '',
      location: '',
      image: '',
      phoneNumber: 0,
    };
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newProduct.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleWallet() {
    this.showWallet = !this.showWallet;
  }
}
