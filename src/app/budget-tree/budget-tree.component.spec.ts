import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTreeComponent } from './budget-tree.component';

describe('BudgetTreeComponent', () => {
  let component: BudgetTreeComponent;
  let fixture: ComponentFixture<BudgetTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
