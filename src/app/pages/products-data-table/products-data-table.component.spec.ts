import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDataTablePage } from './products-data-table.component';

describe('ProductsDataTablePage', () => {
  let component: ProductsDataTablePage;
  let fixture: ComponentFixture<ProductsDataTablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsDataTablePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDataTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
