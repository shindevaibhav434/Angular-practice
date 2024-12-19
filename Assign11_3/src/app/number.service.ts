import { Injectable } from '@angular/core';
import { BlobOptions } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No1 : number)
  {
    var tempp : number = No1;
    var bFlag : boolean = false;
    var i : number = 0;
    for(i = 2; i < No1; i++)
    {
      if((No1 % i) == 0)
      {
        bFlag = true;
      }
    }
    if(bFlag == false)
    {
      return "No is Prime";
    }
    else 
    {
      return "No is Not Prime";
    }
  }
}
