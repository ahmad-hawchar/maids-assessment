import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: "**", component: NotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

