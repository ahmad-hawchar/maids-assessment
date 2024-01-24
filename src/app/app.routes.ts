import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

export const routes: Routes = [
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: "**", component: NotFoundComponent }
];
