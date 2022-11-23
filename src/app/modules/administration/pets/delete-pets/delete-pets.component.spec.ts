import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePetsComponent } from './delete-pets.component';

describe('DeletePetsComponent', () => {
  let component: DeletePetsComponent;
  let fixture: ComponentFixture<DeletePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
