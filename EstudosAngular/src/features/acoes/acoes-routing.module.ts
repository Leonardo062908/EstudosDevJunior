import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaAcoesPageComponent } from './pages/busca-acoes-page.component';

const routes: Routes = [
  {
    path: '',
    component: BuscaAcoesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcoesRoutingModule {}
