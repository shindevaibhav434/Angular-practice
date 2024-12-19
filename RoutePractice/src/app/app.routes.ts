import { Routes } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { DefalutComponent } from './defalut/defalut.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [
    // specific route
    {path : 'batchdetails',component : BatchDetailsComponent},
    {path : 'batchlist',component : BatchListComponent},
    // default route
    {path : '',component : DefalutComponent},
    // wildcard route , invalid route
    {path : '**',component : InvalidPageComponent}

];
