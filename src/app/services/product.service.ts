import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      tap((obj) => console.log("fetched collection")),
      catchError(this.handleError)
    );
  }

  getProductById(id): Observable<Product> {
    return this.http
      .get<Product>(`${this.url}/${id}`)
      .pipe(tap(() => catchError(this.handleError)));
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
