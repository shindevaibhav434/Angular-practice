import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string
  {
    let temp : string = "";
    let i : number = value.length-1;

    while(i >= 0)
    {
      temp = temp + value[i];
      i--;
    }
    return temp;
  }

}
