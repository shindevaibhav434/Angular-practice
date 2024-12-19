import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmaticService],
})
export class DemoComponent
{
  public AddResult : number = 0;
  public SubResult : number = 0;
  constructor(private obj : ArithmaticService)
  {
    this.AddResult = this.obj.Add(25,20);
    this.SubResult = this.obj.Sub(25,20);
  }
}
