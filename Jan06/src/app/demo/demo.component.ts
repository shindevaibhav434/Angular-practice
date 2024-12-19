import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
{
  public res1 : number = 0;
  public v1 : number = 0;
  public v2 : number = 0;

  public AcceptNum(No1:any,No2 :any)
  {
    this.v1 = parseInt(No1);
    this.v2 = parseInt(No2);
     this.res1 = this.v1 + this.v2;
  }
}
