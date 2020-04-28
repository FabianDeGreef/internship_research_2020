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

  constructor(
    private cartService: CartService,
    private notifyService: NotifyService,
    private checkCartItemService: CheckCartItemService
  ) {}

  fetchList() {
    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
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

  ngOnInit() {
    this.notifyService.cartNotify.subscribe((change) => {
      if (change) {
        this.fetchList();
      }
    });
    this.fetchList();
  }
}
