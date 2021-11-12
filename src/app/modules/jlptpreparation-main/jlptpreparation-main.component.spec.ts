import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JLPTPreparationMainComponent } from './jlptpreparation-main.component';

describe('JLPTPreparationMainComponent', () => {
  let component: JLPTPreparationMainComponent;
  let fixture: ComponentFixture<JLPTPreparationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JLPTPreparationMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JLPTPreparationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
