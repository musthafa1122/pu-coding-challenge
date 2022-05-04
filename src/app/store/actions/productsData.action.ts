import { IProductsData } from 'src/app/models/productsData.model';

export namespace ProductsDataActions {
  export class FetchProductsData {
    static readonly type = '[ProductsDataState] Fetch Products Data';
    constructor(
      public productsData: IProductsData[],
      public headers: string[]
    ) {}
  }

  export class SetFilteredProductsData {
    static readonly type = '[ProductsDataState] Set Filtered Products Data';
    constructor(public productsData: IProductsData[]) {}
  }
}
