import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysMonthWordsComponent } from './days-month-words.component';

describe('DaysMonthWordsComponent', () => {
  let component: DaysMonthWordsComponent;
  let fixture: ComponentFixture<DaysMonthWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysMonthWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysMonthWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
