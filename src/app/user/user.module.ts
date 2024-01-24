import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UsermainComponent } from './usermain/usermain.component';


@NgModule({
  declarations: [
    HomepageComponent,
    SingleUserComponent,
    UsermainComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }