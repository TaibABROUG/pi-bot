import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntitieComponent } from './edit-entitie.component';

describe('EditEntitieComponent', () => {
  let component: EditEntitieComponent;
  let fixture: ComponentFixture<EditEntitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
