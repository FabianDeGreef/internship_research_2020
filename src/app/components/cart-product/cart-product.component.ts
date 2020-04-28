import { CartService } from "./../../services/cart.service";
import { Product } from "./../../models/product";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart-product",
  templateUrl: "./cart-product.component.html",
  styleUrls: ["./cart-product.component.scss"],
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;
  @Output() deletedProduct: EventEmitter<any> = new EventEmitter();

  onDelete(product: Product) {
    this.deletedProduct.emit(product);
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
