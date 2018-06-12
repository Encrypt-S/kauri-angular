import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { TranslationSampleComponent } from './translation-sample.component';

describe('TranslationSampleComponent', () => {
  let component: TranslationSampleComponent;
  let fixture: ComponentFixture<TranslationSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationSampleComponent ],
      // imports: [ FormsModule ],
      schemas: [NO_ERRORS_SCHEMA]
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
