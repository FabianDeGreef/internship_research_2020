import { SharedModule } from "./../../SharedModule";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CartPageRoutingModule } from "./cart-routing.module";
import { CartPage } from "./cart.page";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
  ],
  declarations: [CartPage],
})
export class CartPageModule {}
