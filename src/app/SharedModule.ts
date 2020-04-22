import { CartProductComponent } from "./components/cart-product/cart-product.component";
import { ProductComponent } from "./components/product/product.component";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ProductComponent, CartProductComponent],
  exports: [ProductComponent, CartProductComponent],
})
export class SharedModule {}
