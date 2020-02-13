this folder contain all the definition of pipes exemple : 
sherten.pipe.ts  // this pipe return the limit first letter of the value enter

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
