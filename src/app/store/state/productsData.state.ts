/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IProductsDataState } from '../../models/productsData.model';
import { ProductsDataActions } from '../actions/productsData.action';

@State<IProductsDataState>({
  name: 'productsDataState',
  defaults: {
    productsData: [],
    filteredProductsData: [],
    productsDataHeaders: [],
  },
})
@Injectable()
export class ProductsDataState {
  @Action(ProductsDataActions.SetFilteredProductsData)
  fetchFilteredProductsData(
    ctx: StateContext<IProductsDataState>,
    action: ProductsDataActions.SetFilteredProductsData
  ) {
    ctx.patchState({
      productsData: ctx.getState().productsData,
      filteredProductsData: action.productsData,
    });
  }

  @Action(ProductsDataActions.FetchProductsData)
  fetchProductsData(
    ctx: StateContext<IProductsDataState>,
    action: ProductsDataActions.FetchProductsData
  ) {
    ctx.patchState({
      productsData: action.productsData,
      filteredProductsData: action.productsData,
      productsDataHeaders: action.headers,
    });
  }
}
