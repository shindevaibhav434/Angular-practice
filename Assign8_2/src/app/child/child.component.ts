import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{
  @Input() public receiveMsg : any;

  @Output() public obj = new EventEmitter();
  public sendData : string = "";
  fun()
  {
    this.sendData = "Hello from child";
    this.obj.emit(this.sendData);
  }
  
}
