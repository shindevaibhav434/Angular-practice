import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { DefalutComponent } from './defalut/defalut.component';
import { RouterLink } from '@angular/router';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink ,RouterOutlet,BatchDetailsComponent,BatchListComponent,DefalutComponent,InvalidPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutePractice';
}
