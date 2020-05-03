import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { NotifyService } from "./../../services/notify.service";
import { CheckCartItemService } from "./../../services/check-cart-item.service";
import { CartService } from "./../../services/cart.service";
import { Product } from "src/app/models/product";
import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.page.html",
  styleUrls: ["./deals.page.scss"],
})
export class DealsPage implements OnInit {
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
      position: "bottom",
    });
    toast.present();
  }

  fetchList() {
    this.productService.getDeals().subscribe((data) => {
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
