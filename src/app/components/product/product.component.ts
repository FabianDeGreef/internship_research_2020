import { CartService } from "./../../services/cart.service";
import { Product } from "./../../models/product";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  cartData: Product[];
  duplicateItem: Product = null;

  onBuy(product: Product) {
    this.cartData.map((item) => {
      if (product.id === item.id) {
        this.duplicateItem = product;
      }
    });

    if (!this.duplicateItem) {
      let cartProduct = Object.assign({}, product);
      this.cartService.addProduct(product).subscribe((data) => {
        console.log("product added to the cart");
      });
      this.cartData.push(cartProduct);
    }
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getProducts().subscribe((data) => {
      this.cartData = data;
    });
  }
}
