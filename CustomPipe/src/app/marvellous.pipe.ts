import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous',
  standalone: true
})
export class MarvellousPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) : any
  {
    if(args[0] == "PPA")
    {
      return "PRE-PLACEMENT ACTIVITY";
    }
    if(args[0] == "Angular")
    {
      return "Angular mean stack";
    }
  }

}
