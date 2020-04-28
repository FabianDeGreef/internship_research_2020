import { Product } from "./../models/product";
import { ProductService } from "./../services/product.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ProductResolverService implements Resolve<any> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get("id");
    //console.log(id);
    //let product: Product;
    // this.productService.getProductById(id).subscribe((data) => {
    //   product = data;
    //   console.log(product);
    //   return product;
    // });

    return this.productService.getProductById(id);
  }
}
