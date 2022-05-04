import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDataTablePage } from './pages/products-data-table/products-data-table.component';

const routes: Routes = [
  { path: 'products_table', component: ProductsDataTablePage },
  { path: '', redirectTo: '/products_table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
