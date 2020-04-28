import { Product } from "./../models/product";
import { CartService } from "./cart.service";
import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CheckCartItemService {
  cartData: Product[];
  duplicateItem: boolean = false;

  checkProduct(product: Product): boolean {
    this.cartData.map((item) => {
      if (product.id === item.id) {
        this.duplicateItem = true;
      }
    });

    if (!this.duplicateItem) {
      this.cartData.push(product);
      return false;
    } else {
      this.duplicateItem = false;
      return true;
    }
  }

  deleteCartItem(product: Product) {
    this.cartData = this.cartData.filter((item) => item.id !== product.id);
  }

  getCartItemCount(): Number {
    return this.cartData.length;
  }

  ngOnInit() {}

  constructor(private cartService: CartService) {
    this.cartService.getProducts().subscribe((data) => {
      this.cartData = data;
    });
  }
}
