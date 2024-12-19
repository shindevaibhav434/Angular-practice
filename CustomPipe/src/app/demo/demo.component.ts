import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousPipe } from '../marvellous.pipe';
import { InfosystemsPipe } from '../infosystems.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,MarvellousPipe,InfosystemsPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
{
  name = "Marvellous Infosystems";

  public Book = {"Name" : "Learning Angular","Author" : "James Peter"}

  today = new Date();

}
