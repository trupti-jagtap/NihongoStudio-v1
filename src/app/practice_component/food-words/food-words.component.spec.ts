import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWordsComponent } from './food-words.component';

describe('FoodWordsComponent', () => {
  let component: FoodWordsComponent;
  let fixture: ComponentFixture<FoodWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
