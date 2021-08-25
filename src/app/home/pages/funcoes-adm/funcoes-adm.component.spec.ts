import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesAdmComponent } from './funcoes-adm.component';

describe('FuncoesAdmComponent', () => {
  let component: FuncoesAdmComponent;
  let fixture: ComponentFixture<FuncoesAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncoesAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncoesAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
