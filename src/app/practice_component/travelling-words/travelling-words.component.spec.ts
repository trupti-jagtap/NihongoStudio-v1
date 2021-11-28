import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingWordsComponent } from './travelling-words.component';

describe('TravellingWordsComponent', () => {
  let component: TravellingWordsComponent;
  let fixture: ComponentFixture<TravellingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellingWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
