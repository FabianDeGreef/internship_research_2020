import { NotifyService } from "./../../services/notify.service";
import { CartService } from "./../../services/cart.service";
import { Product } from "./../../models/product";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();
  @Output() detailsProduct: EventEmitter<Product> = new EventEmitter();
  @Output() deletedProduct: EventEmitter<any> = new EventEmitter();

  onDelete(product: Product) {
    this.deletedProduct.emit(product);
  }

  onBuy(product: Product) {
    this.addProduct.emit(product);
  }

  onDetails(product: Product) {
    this.detailsProduct.emit(product);
  }

  constructor() {}

  ngOnInit() {}
}
