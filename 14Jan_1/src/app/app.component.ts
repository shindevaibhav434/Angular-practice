import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  MyForm = new FormGroup(
    {
      username : new FormControl('Vaibhav'),
      password : new FormControl(''),
      ConfirmPass : new FormControl(''),

      // nested form object 

      MyClass : new FormGroup(
        {
          batch : new FormControl('PPA'),
          fees : new FormControl('10000'),
        }
      )

    }
    
    );

    SetData()
    {
      this.MyForm.setValue(
      {
        username : 'Vikas',
        password : '1245',
        ConfirmPass : '2563',
        MyClass :
        {
          batch : 'Python',
          fees : '21000'
        }
      }
    )
    }
}
