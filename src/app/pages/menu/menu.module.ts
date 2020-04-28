import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MenuPageRoutingModule } from "./menu-routing.module";

import { MenuPage } from "./menu.page";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
  ],
  declarations: [MenuPage],
})
export class MenuPageModule {}
