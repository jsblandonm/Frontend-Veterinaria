import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetsComponent } from './create-pets.component';

describe('CreatePetsComponent', () => {
  let component: CreatePetsComponent;
  let fixture: ComponentFixture<CreatePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
