import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeMainComponent } from './practice-main.component';

describe('PracticeMainComponent', () => {
  let component: PracticeMainComponent;
  let fixture: ComponentFixture<PracticeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
