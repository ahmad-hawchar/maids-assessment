import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UsermainComponent } from './usermain/usermain.component';
import { NotFoundComponent } from '../not-found/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: UsermainComponent, children: [
      { path: 'homepage', component: HomepageComponent },
      { path: 'one-user/:id', component: SingleUserComponent },
      { path: "**", component: NotFoundComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
