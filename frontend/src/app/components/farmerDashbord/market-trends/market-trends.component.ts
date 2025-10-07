import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-market-trends',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './market-trends.component.html',
  styleUrl: './market-trends.component.css'
})
export class MarketTrendsComponent {

  products = ['Maize', 'Tomatoes', 'Onions'];
  markets = ['Wakulima', 'Gikomba', 'Karatina'];

  selectedProduct = '';
  selectedMarket = '';

  marketData = [
    {
      product: 'Tomatoes',
      market: 'Gikomba',
      minPrice: 90,
      maxPrice: 110,
      avgPrice: 100,
      updated: '1 hour ago'
    },
    {
      product: 'Maize',
      market: 'Wakulima',
      minPrice: 40,
      maxPrice: 55,
      avgPrice: 47,
      updated: '2 hours ago'
    },
    {
      product: 'Onions',
      market: 'Karatina',
      minPrice: 60,
      maxPrice: 70,
      avgPrice: 65,
      updated: 'Today'
    }
  ];

}
