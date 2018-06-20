import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { ApiSampleComponent } from './api-sample.component';

describe('ApiSampleComponent', () => {
  let component: ApiSampleComponent;
  let fixture: ComponentFixture<ApiSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSampleComponent ],
      // imports: [ FormsModule ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
