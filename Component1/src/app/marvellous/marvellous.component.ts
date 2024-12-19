import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent
{
  public name : string = "";

  // event listener for button
  public fun(value : any)
  {
    console.log("Inside fun");
    this.name = value;
  }
 
}
