import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationSampleComponent } from './translation-sample.component';

describe('TranslationSampleComponent', () => {
  let component: TranslationSampleComponent;
  let fixture: ComponentFixture<TranslationSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
