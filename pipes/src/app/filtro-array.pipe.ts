import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[], filtro = ''): string[] {
    if (value.length === 0 || !filtro) {
      
      return value;
    }

    const lowerCaseValue = filtro.toLocaleLowerCase();    

    return value.filter(v =>
      v.toLocaleLowerCase().includes(lowerCaseValue)
    );
  }

}
