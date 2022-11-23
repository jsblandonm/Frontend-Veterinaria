import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductServicesComponent } from './search-product-services.component';

describe('SearchProductServicesComponent', () => {
  let component: SearchProductServicesComponent;
  let fixture: ComponentFixture<SearchProductServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProductServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
