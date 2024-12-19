import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infosystems',
  standalone: true
})
export class InfosystemsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any
  {
    if(args[0] == 24)
    {
      return "Age is valid";
    }
    if(args[0] != 24)
    {
      return "Age is not valid";
    }
  }

}
