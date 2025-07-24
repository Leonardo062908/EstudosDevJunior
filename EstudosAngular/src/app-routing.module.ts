import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'acoes',
    loadChildren: () =>
      import('./features/acoes/acoes.module').then((m) => m.AcoesModule),
  },
  {
    path: '',
    redirectTo: 'acoes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'acoes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
