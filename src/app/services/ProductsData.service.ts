import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { ProductsDataActions } from '../store/actions/productsData.action';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor(private http: HttpClient, private _store: Store) {}

  public getProductsData(): Observable<any> {
    return this.http.get('./assets/table_data.json');
  }

  public fetchProductsData(): void {
    this.getProductsData().subscribe((data) => {
      if (data[1]) {
        this._store.dispatch(
          new ProductsDataActions.FetchProductsData(
            Object.values(data),
            Object.keys(data[1])
          )
        );
      }
    });
  }
}
