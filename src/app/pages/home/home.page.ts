import { ProductService } from "./../../services/product.service";
import { NotifyService } from "./../../services/notify.service";
import { CartService } from "./../../services/cart.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  cartCount: Number;
  dealsCount: Number;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.notifyService.cartNotify.subscribe((change) => {
      if (change) {
        this.getCartCount();
      }
    });
    this.getCartCount();
    this.getDealsCount();
  }

  getCartCount() {
    this.cartService.getProducts().subscribe((data) => {
      this.cartCount = data.length;
    });
  }

  getDealsCount() {
    this.productService.getDeals().subscribe((data) => {
      this.dealsCount = data.length;
    });
  }
}
