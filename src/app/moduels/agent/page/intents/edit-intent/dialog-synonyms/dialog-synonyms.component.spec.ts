import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSynonymsComponent } from './dialog-synonyms.component';

describe('DialogSynonymsComponent', () => {
  let component: DialogSynonymsComponent;
  let fixture: ComponentFixture<DialogSynonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSynonymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
