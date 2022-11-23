import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductServicesComponent } from './edit-product-services.component';

describe('EditProductServicesComponent', () => {
  let component: EditProductServicesComponent;
  let fixture: ComponentFixture<EditProductServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
