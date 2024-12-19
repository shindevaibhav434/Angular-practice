import { Component, EventEmitter,Output} from '@angular/core';;

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{
  @Output() public Obj1 = new EventEmitter();
  public SendMessage()
  {
    this.Obj1.emit("Hello parent....");
  }
}
