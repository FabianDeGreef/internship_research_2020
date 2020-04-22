import { AppComponent } from "./../../app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabMain",
  },
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "tabMain",
        loadChildren: () =>
          import("../main/main.module").then((m) => m.MainPageModule),
      },
      {
        path: "tabCart",
        loadChildren: () =>
          import("../cart/cart.module").then((m) => m.CartPageModule),
      },
      {
        path: "tabDeals",
        loadChildren: () =>
          import("../deals/deals.module").then((m) => m.DealsPageModule),
      },
      {
        path: "tabMain/details",
        loadChildren: () =>
          import("../details/details.module").then((m) => m.DetailsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
