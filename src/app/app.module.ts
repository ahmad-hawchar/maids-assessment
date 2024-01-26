import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UserModule } from "./user/user.module";
import { StoreModule } from "@ngrx/store";
import { searchReducer } from "./user/state/user.reducers";
@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        StoreModule.forRoot({ search: searchReducer })
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
