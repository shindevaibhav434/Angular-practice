import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(Param:string,value:number): any
  {
    if(Param == 'Even')
    {
     if((value % 2) == 0)
     {
      return "Number is Even";
     }
     else
     {
      return "Number is Not Even";
     }
    }
    if(Param == 'Perfect')
    {
      var temp : number = value;
      var iCnt : number = 0;
      var iSum : number = 0;

      for(iCnt = 0; iCnt <= value;iCnt++)
      {
        if((value % iCnt) == 0)
        {
          iSum = iSum + iCnt;
        }
      }
      if(temp == iSum)
      {
        return "No is Perfect";
      }
      else 
      {
        return "No is Not Perfect";
      }
    }
    if(Param == 'Prime')
    {
      var iCnt : number = 2;
      var Tflag : boolean = true;
      for(iCnt = 2; iCnt < value;iCnt++)
      {
        if((value % iCnt) == 0)
        {
          Tflag = false;
        }
      }
      if(Tflag == true)
      {
        return "Number is Prime";
      }
      else 
      {
        return "Number is Not Prime";
      }
    }
    if(Param == 'Odd')
    {
      if((value % 2) != 0)
      {
        return "Number is Odd";
      }
      else 
      {
        return "Number is Not Odd";
      }
    }
  }
}
