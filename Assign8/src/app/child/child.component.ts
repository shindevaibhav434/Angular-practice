import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{
  @Output() public obj = new EventEmitter();
  public Display(value : any)
  {
    this.obj.emit(value);
  }
}
