import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductServicesComponent } from './delete-product-services.component';

describe('DeleteProductServicesComponent', () => {
  let component: DeleteProductServicesComponent;
  let fixture: ComponentFixture<DeleteProductServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
