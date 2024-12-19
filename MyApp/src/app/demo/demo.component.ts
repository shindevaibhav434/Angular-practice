import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [MyServiceService]
})
export class DemoComponent
{
  public addReturn : number = 0;
  public subReturn : number = 0;

  constructor (private obj : MyServiceService)
  {
    this.addReturn = this.obj.Add(23,5);
    this.subReturn = this.obj.Sub(36,5);
  }

}
