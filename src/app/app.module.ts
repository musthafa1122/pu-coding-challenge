import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsDataTableComponent } from './components/productsDataTable/productsDataTable.component';
import { ProductsDataService } from './services/ProductsData.service';
import { ProductsDataState } from './store/state/productsData.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProductsDataTablePage } from './pages/products-data-table/products-data-table.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FilterProductsDataHelper } from './components/filter/filter.helper';
import { TableHeaderPipe } from './pipes/table-header.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsDataTableComponent,
    FilterComponent,
    ProductsDataTablePage,
    TableHeaderPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxsModule.forRoot([ProductsDataState]),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NzTableModule,
    NzDividerModule,
    FormsModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzToolTipModule,
  ],
  providers: [
    ProductsDataService,
    FilterProductsDataHelper,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
