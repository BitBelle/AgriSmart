import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  // shop = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  categories = [
    {
      name: 'Vegetables',
      image:
        'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Fruits',
      image:
        'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // { name: 'Juices', image: 'https://via.placeholder.com/100' },
    {
      name: 'Fresh Nuts',
      image:
        'https://images.unsplash.com/photo-1673292636579-2343673a945d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  products = [
    {
      name: 'Organic Bellpepper',
      category: 'Vegetables',
      price: 50,
      location: 'Nairobi',
      image:
        'https://images.unsplash.com/photo-1621953723422-6023013f659d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSold: true,
      },
    {
      name: 'Organic Carrot',
      category: 'Vegetables',
      price: 40,
      location: 'Nakuru',
      image:
        'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSold: false,
      },
    {
      name: 'Organic Spinach',
      category: 'Vegetables',
      price: 30,
      location: 'Kisumu',
      image:
        'https://images.unsplash.com/photo-1645713595882-b6133d586fd0?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSold: true,
      },
    {
      name: 'Organic Tomato',
      category: 'Vegetables',
      price: 50,
      location: 'Nairobi',
      image:
        'https://images.unsplash.com/photo-1648822825892-ee88e97bdd34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSold: false,
      },
    {
      name: 'Organic Carrot',
      category: 'Vegetables',
      price: 40,
      location: 'Nakuru',
      image:
        'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSold: false,
      },
    {
      name: 'Organic Spinach',
      category: 'Vegetables',
      price: 30,
      location: 'Kisumu',
      image:
        'https://images.unsplash.com/photo-1645713595882-b6133d586fd0?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSold: false,
      },
  ];

  cartItems: any[] = [];
  isCartOpen = false;
  selectedProduct: any = null;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    // document.body.style.overflow = 'hidden';
  }

  openProductDetails(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  closeModalOnOutsideClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal(); // Close modal if clicked outside the modal content
    }
  }

  addToCart(product: any) {
    const existingItem = this.cartItems.find(
      (item) => item.name === product.name
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.closeModal();
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity += 1;
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    } else {
      this.removeFromCart(index);
    }
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  checkout() {
    alert('Checkout successful!');
    this.cartItems = [];
  }
}
