import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSucursalComponent } from './edit-sucursal.component';

describe('EditSucursalComponent', () => {
  let component: EditSucursalComponent;
  let fixture: ComponentFixture<EditSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
