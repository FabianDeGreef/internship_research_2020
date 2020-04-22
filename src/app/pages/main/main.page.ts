import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  fetchList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnInit() {
    this.fetchList();
  }
}
