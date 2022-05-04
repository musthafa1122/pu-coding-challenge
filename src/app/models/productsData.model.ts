import { AbstractControl, FormGroup } from '@angular/forms';

export interface IProductsData {
  id: number;
  gtin: number;
  product_name: string;
  product_desc: string;
  price: number;
  currency: string;
  category: string;
  gender: string;
  quantity: number;
  size: string;
  style: string;
  color: string;
  url: string;
  image: string;
  image_additional: string;
  additional: string;
  source_video: string;
}

export interface IFilter {
  selectedColumns: string[];
  selectedOperators: string[];
  textValue: string;
}

export interface IFilterFormGroup extends FormGroup {
  value: IFilter;
  controls: {
    selectedColumns: AbstractControl;
    selectedOperators: AbstractControl;
    textValue: AbstractControl;
  };
}

export interface IProductsDataState {
  productsData: IProductsData[];
  filteredProductsData: IProductsData[];
  productsDataHeaders: string[];
}
