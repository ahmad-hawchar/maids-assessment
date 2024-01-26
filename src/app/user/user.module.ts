import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UsermainComponent } from './usermain/usermain.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AnimationDirective } from './directives/animation.directive';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    HomepageComponent,
    SingleUserComponent,
    UsermainComponent,
    HeaderComponent,
    AnimationDirective,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    StoreModule
  ]
})
export class UserModule { }
