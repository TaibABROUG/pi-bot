import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnswersComponent } from './dialog-answers.component';

describe('DialogAnswersComponent', () => {
  let component: DialogAnswersComponent;
  let fixture: ComponentFixture<DialogAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
