import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcoesRoutingModule } from './acoes-routing.module';
import { BuscaAcoesPageComponent } from './pages/busca-acoes-page.component';

@NgModule({
  declarations: [BuscaAcoesPageComponent],
  imports: [CommonModule, AcoesRoutingModule],
})
export class AcoesModule {}
