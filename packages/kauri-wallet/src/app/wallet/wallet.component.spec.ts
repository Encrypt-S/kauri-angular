import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WalletComponent } from './wallet.component';
import { ApiService } from '../services/api/api.service';
import { ApiServiceStub } from '../services/api/api.service.stub';
import { DataService } from '../services/data/data.service';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletComponent ],
      providers: [
        DataService,
        {provide: ApiService, useClass: ApiServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
