export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  location: string;
  image: string;
  phoneNumber: number;
  isSold?: boolean;
}
