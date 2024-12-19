import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService 
{
  constructor() { }

  Add(a:number,b:number)
  {
    return a + b;
  }
  Sub(x:number,z:number)
  {
    return x - z;
  }

}
