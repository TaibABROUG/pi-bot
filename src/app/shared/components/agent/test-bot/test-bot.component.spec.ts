import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBotComponent } from './test-bot.component';

describe('TestBotComponent', () => {
  let component: TestBotComponent;
  let fixture: ComponentFixture<TestBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
