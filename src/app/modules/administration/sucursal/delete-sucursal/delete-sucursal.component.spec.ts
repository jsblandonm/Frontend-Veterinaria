import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSucursalComponent } from './delete-sucursal.component';

describe('DeleteSucursalComponent', () => {
  let component: DeleteSucursalComponent;
  let fixture: ComponentFixture<DeleteSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
