import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcoesRoutingModule } from './acoes-routing.module';
import { BuscaAcoesPageComponent } from './pages/busca-acoes-page/busca-acoes-page.component';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [BuscaAcoesPageComponent],
  imports: [CommonModule, AcoesRoutingModule, SharedModule],
})
export class AcoesModule {}
