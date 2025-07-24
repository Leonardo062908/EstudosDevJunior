// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes compartilhados
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

// Pipes
import { FormatarMoedaPipe } from './pipes/formatar-moeda.pipe';

// Directives
import { DestaqueDirective } from './directives/destaque.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent, FormatarMoedaPipe, DestaqueDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // Módulos
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Componentes/Pipes/Directives
    LoadingSpinnerComponent,
    FormatarMoedaPipe,
    DestaqueDirective,
  ],
})
export class SharedModule {}
