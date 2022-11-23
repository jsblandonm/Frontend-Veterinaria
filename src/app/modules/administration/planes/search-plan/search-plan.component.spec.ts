import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlanComponent } from './search-plan.component';

describe('SearchPlanComponent', () => {
  let component: SearchPlanComponent;
  let fixture: ComponentFixture<SearchPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
