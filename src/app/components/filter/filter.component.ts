import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { ProductsDataService } from '../../services/ProductsData.service';
import { FilterOperators } from '../../utils/productsData.constants';
import { ProductsDataState } from '../../store/state/productsData.state';
import {
  IFilterFormGroup,
  IProductsDataState,
} from '../../models/productsData.model';
import { Store } from '@ngxs/store';
import { ProductsDataActions } from '../../store/actions/productsData.action';
import { FilterProductsDataHelper } from './filter.helper';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @ViewSelectSnapshot(ProductsDataState)
  productsDataState!: IProductsDataState;

  filterForm: IFilterFormGroup;
  operators = FilterOperators;

  constructor(
    private _formBuilder: FormBuilder,
    private _productsDataService: ProductsDataService,
    private _filterHelper: FilterProductsDataHelper,
    private _store: Store
  ) {
    this.filterForm = this._formBuilder.group({
      selectedColumns: null,
      selectedOperators: null,
      textValue: ['', Validators.required],
    }) as IFilterFormGroup;
  }

  applyFilter(): void {
    this._store.dispatch(
      new ProductsDataActions.SetFilteredProductsData(
        this._filterHelper.getFilteredList(this.filterForm.value)
      )
    );
  }

  clearFilter(): void {
    this.filterForm.reset();
    this._productsDataService.fetchProductsData();
  }
}
