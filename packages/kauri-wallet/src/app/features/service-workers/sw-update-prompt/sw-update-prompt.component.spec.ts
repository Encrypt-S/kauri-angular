import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwUpdatePromptComponent } from './sw-update-prompt.component';

describe('SwUpdatePromptComponent', () => {
  let component: SwUpdatePromptComponent;
  let fixture: ComponentFixture<SwUpdatePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwUpdatePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwUpdatePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
