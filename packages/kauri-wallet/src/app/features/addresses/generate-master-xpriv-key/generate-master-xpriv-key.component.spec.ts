import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMasterXPrivKeyComponent } from './generate-master-xpriv-key.component';

describe('GenerateMasterXPrivKeyComponent', () => {
  let component: GenerateMasterXPrivKeyComponent;
  let fixture: ComponentFixture<GenerateMasterXPrivKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateMasterXPrivKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMasterXPrivKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
