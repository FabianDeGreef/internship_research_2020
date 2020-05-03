import { Router } from "@angular/router";
import { Product } from "./../../models/product";
import { CheckCartItemService } from "./../../services/check-cart-item.service";
import { NotifyService } from "./../../services/notify.service";
import { CartService } from "./../../services/cart.service";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  products: Product[];
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private notifyService: NotifyService,
    private checkCartItemService: CheckCartItemService,
    private router: Router
  ) {}

  fetchList() {
    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.calculateTotalPrice();
    });
  }
  onDelete(product: Product) {
    this.cartService.removeProduct(product).subscribe((data) => {
      console.log("product deleted from the cart");
      this.fetchList();
      this.notifyService.notifyCart();
      this.checkCartItemService.deleteCartItem(product);
    });
  }

  onDetails(product: Product) {
    this.router.navigate(["/menu/home/tabMain/details/" + product.id]);
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.products.forEach((product) => {
      let value = parseFloat(
        product.dealPrice ? product.dealPrice : product.price
      );
      this.totalPrice = this.totalPrice + value;
    });
  }

  checkout() {
    this.products.forEach((product) => {
      this.onDelete(product);
    });
  }

  ngOnInit() {
    this.notifyService.cartNotify.subscribe((change) => {
      if (change) {
        this.fetchList();
      }
    });
    this.fetchList();
  }
}
