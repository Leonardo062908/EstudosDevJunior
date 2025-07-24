import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatarMoeda' })
export class FormatarMoedaPipe implements PipeTransform {
  transform(valor: number, moeda: string = 'BRL'): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: moeda,
    }).format(valor);
  }
}
