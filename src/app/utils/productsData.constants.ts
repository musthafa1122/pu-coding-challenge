import { FilterOperatorsEnum } from './productsData.enum';

export const FilterOperators = [
  {
    value: FilterOperatorsEnum.StartsWith,
    label: 'Starts with',
  },
  {
    value: FilterOperatorsEnum.EndsWith,
    label: 'Ends with',
  },
  {
    value: FilterOperatorsEnum.Contains,
    label: 'Contains',
  },

  {
    value: FilterOperatorsEnum.IsEqualTo,
    label: 'Is equal to',
  },
];
