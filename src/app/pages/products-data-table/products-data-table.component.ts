import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/ProductsData.service';

@Component({
  selector: 'app-products-data-table',
  templateUrl: './products-data-table.component.html',
  styleUrls: ['./products-data-table.component.scss'],
})
export class ProductsDataTablePage implements OnInit {
  constructor(private _productsDataService: ProductsDataService) {}

  ngOnInit(): void {
    this._productsDataService.fetchProductsData();
  }
}
