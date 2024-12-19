import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService,StringService],
})

export class ChildComponent
{
  public Iret : number = 0;
  public StrRet : string = "";
  constructor(private obj :NumberService,private obj2 : StringService)
  {
    this.Iret = this.obj2.CountCapital("ShamRavO");
    this.StrRet = this.obj.ChkPrime(21);

  }
 
}
