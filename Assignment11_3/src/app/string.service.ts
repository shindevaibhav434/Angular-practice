import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(Msg : string)
  {
    var UpperCounter : number = 0;
    var i : number = 0;

    for(i = 0; i < Msg.length;i++)
    {
      if(Msg[i] >= 'A' && Msg[i] <= 'Z')
      {
        UpperCounter++;
      }
    }
    return UpperCounter;
  }

}
