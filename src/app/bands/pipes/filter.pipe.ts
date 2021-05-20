import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    const resultBands = [];

    for ( const band of value ) {
      if ( band.band_name.toLowerCase().indexOf( arg ) > -1 ) {
        resultBands.push(band);
      };
    };

    return resultBands;

  }

}