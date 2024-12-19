import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

export const routes: Routes = [
    {path : 'technologies',component : TechnologiesComponent,},
    {path : 'books',component : BooksComponent},
];
