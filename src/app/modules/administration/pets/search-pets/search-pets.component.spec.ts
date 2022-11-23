import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPetsComponent } from './search-pets.component';

describe('SearchPetsComponent', () => {
  let component: SearchPetsComponent;
  let fixture: ComponentFixture<SearchPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
