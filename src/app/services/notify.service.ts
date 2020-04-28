import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NotifyService {
  @Output() cartNotify: EventEmitter<boolean> = new EventEmitter();
  @Output() cartItemNotify: EventEmitter<boolean> = new EventEmitter();

  notifyCart() {
    this.cartNotify.emit(true);
  }

  notifyCartItem() {
    this.cartItemNotify.emit(true);
  }
}
