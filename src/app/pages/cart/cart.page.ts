import { CartService } from "./../../services/cart.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {}

  fetchList() {
    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  onDelete() {
    this.fetchList();
  }

  ngOnInit() {
    this.fetchList();
  }

  ionViewWillEnter() {
    this.fetchList();
  }
}
