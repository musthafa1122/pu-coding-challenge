import { Component, ViewEncapsulation } from '@angular/core';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import {
  IProductsData,
  IProductsDataState,
} from '../../models/productsData.model';
import { ProductsDataState } from '../../store/state/productsData.state';

@Component({
  selector: 'app-table',
  templateUrl: './productsDataTable.component.html',
  styleUrls: ['./productsDataTable.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsDataTableComponent {
  @ViewSelectSnapshot(ProductsDataState)
  productsDataState: IProductsDataState | undefined;

  trackByIndex(_: number, data: IProductsData): number {
    return data.id;
  }
}
