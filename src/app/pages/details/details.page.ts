import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/models/product";
import { Location } from "@angular/common";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  product: Product;
  totalPrice: number;

  calculatePrice(price: string) {
    let value = parseFloat(price);
    return value * 1.21;
  }
  previous() {
    this._location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {}
  ngOnInit() {
    if (this.route.snapshot.data["product"]) {
      this.product = this.route.snapshot.data["product"];
    }
  }
}
