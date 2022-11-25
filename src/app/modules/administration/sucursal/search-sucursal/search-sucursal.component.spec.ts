import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSucursalComponent } from './search-sucursal.component';

describe('SearchSucursalComponent', () => {
  let component: SearchSucursalComponent;
  let fixture: ComponentFixture<SearchSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
