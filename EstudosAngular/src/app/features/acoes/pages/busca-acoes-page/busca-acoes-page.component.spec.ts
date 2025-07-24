import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAcoesPageComponent } from './busca-acoes-page.component';

describe('BuscaAcoesPageComponent', () => {
  let component: BuscaAcoesPageComponent;
  let fixture: ComponentFixture<BuscaAcoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaAcoesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscaAcoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
