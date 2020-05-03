import { ProductComponent } from "./components/product/product.component";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class SharedModule {}
