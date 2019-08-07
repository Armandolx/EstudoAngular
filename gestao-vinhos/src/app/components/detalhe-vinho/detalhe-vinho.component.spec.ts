import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVinhoComponent } from './detalhe-vinho.component';

describe('DetalheVinhoComponent', () => {
  let component: DetalheVinhoComponent;
  let fixture: ComponentFixture<DetalheVinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheVinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheVinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
