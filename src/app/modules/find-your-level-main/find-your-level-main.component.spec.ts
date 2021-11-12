import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourLevelMainComponent } from './find-your-level-main.component';

describe('FindYourLevelMainComponent', () => {
  let component: FindYourLevelMainComponent;
  let fixture: ComponentFixture<FindYourLevelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourLevelMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourLevelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
