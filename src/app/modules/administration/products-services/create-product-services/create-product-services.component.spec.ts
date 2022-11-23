import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductServicesComponent } from './create-product-services.component';

describe('CreateProductServicesComponent', () => {
  let component: CreateProductServicesComponent;
  let fixture: ComponentFixture<CreateProductServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
