import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{

  message : any 

  constructor(private obj : MyServiceService)
  {

  }
  ngOnInit()
  {
    this.obj.fun().subscribe(data=>{
      this.message = data;
    })
  }
}
