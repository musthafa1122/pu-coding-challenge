import { Injectable } from '@angular/core';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { ProductsDataState } from '../../store/state/productsData.state';
import {
  IFilter,
  IProductsData,
  IProductsDataState,
} from '../../models/productsData.model';
import { FilterOperatorsEnum } from '../../utils/productsData.enum';

@Injectable()
export class FilterProductsDataHelper {
  @SelectSnapshot(ProductsDataState)
  productsDataState!: IProductsDataState;

  public getFilteredList(filterFields: IFilter): IProductsData[] {
    let columns = this.productsDataState.productsDataHeaders;
    if (filterFields.selectedColumns?.length > 0) {
      columns = filterFields.selectedColumns;
    }

    return this.productsDataState.productsData?.reduce(
      (prev: IProductsData[], current) => {
        columns.map((element) => {
          if (this._isContains(filterFields, current, element)) {
            return prev.push(current);
          } else if (this._isEqualTo(filterFields, current, element)) {
            return prev.push(current);
          } else if (this._startsWith(filterFields, current, element)) {
            return prev.push(current);
          } else if (this._endsWith(filterFields, current, element)) {
            return prev.push(current);
          } else {
            return;
          }
        });
        return prev;
      },
      []
    );
  }

  private _isContains(
    filterFields: IFilter,
    currentArray: IProductsData,
    element: string
  ): boolean {
    return (
      (filterFields.selectedOperators?.includes(FilterOperatorsEnum.Contains) ||
        !filterFields.selectedOperators) &&
      currentArray[element as keyof IProductsData]
        .toString()
        .toLowerCase()
        .includes(filterFields.textValue?.toString().toLowerCase())
    );
  }

  private _isEqualTo(
    filterFields: IFilter,
    currentArray: IProductsData,
    element: string
  ): boolean {
    return (
      filterFields.selectedOperators?.includes(FilterOperatorsEnum.IsEqualTo) &&
      currentArray[element as keyof IProductsData].toString() ===
        filterFields.textValue?.toString()
    );
  }

  private _startsWith(
    filterFields: IFilter,
    currentArray: IProductsData,
    element: string
  ): boolean {
    return (
      filterFields.selectedOperators?.includes(
        FilterOperatorsEnum.StartsWith
      ) &&
      currentArray[element as keyof IProductsData]
        .toString()
        .startsWith(filterFields?.textValue?.toString())
    );
  }

  private _endsWith(
    filterFields: IFilter,
    currentArray: IProductsData,
    element: string
  ): boolean {
    return (
      filterFields.selectedOperators?.includes(FilterOperatorsEnum.EndsWith) &&
      currentArray[element as keyof IProductsData]
        .toString()
        .endsWith(filterFields?.textValue?.toString())
    );
  }
}
