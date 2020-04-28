import { CheckCartItemService } from "./../../services/check-cart-item.service";
import { CartService } from "./../../services/cart.service";
import { NotifyService } from "./../../services/notify.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private checkCartItemService: CheckCartItemService,
    private notifyService: NotifyService,
    public toastController: ToastController,
    private router: Router
  ) {}

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      color: "primary",
    });
    toast.present();
  }

  fetchList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onDetails(product: Product) {
    this.router.navigate(["/menu/home/tabMain/details/" + product.id]);
  }
  onAdd(product: Product) {
    if (this.checkCartItemService.checkProduct(product)) {
      this.presentToast("Item is already inside your cart");
    } else {
      this.cartService.addProduct(product).subscribe((data) => {
        console.log("product added to the cart");
        this.notifyService.notifyCart();
        this.presentToast("Item added to your cart");
      });
    }
  }

  ngOnInit() {
    this.fetchList();
  }
}
