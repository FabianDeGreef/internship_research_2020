import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  url: string = "http://localhost:3000/cart";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      tap((obj) => console.log("fetched cart products")),
      catchError(this.handleError)
    );
  }

  getProductById(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/${id}`).pipe(
      tap((obj) => console.log("fetched cart product")),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product).pipe(
      tap((obj) => console.log("added cart product")),
      catchError(this.handleError)
    );
  }

  removeProduct(product: Product): Observable<any> {
    return this.http.delete(`${this.url}/${product.id}`).pipe(
      tap((obj) => console.log("deleted cart product")),
      catchError(this.handleError)
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product).pipe(
      tap((obj) => console.log("figure updated")),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred: ", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError("Something went wrong; please try again");
  }
}
