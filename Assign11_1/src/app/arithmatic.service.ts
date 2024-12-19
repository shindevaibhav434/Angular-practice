import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService
{
  number1 : number = 0;
  number2 : number = 0;
  constructor() {}

  Add(value1 : number,value2 : number) 
  {
    return value1 + value2;
  }

  Sub(value1 : number, value2 : number)
  {
    return value1 - value2;
  }

}
