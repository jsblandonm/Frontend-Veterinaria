import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSucursalComponent } from './create-sucursal.component';

describe('CreateSucursalComponent', () => {
  let component: CreateSucursalComponent;
  let fixture: ComponentFixture<CreateSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
