import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavoritesComponent} from "./page/favorites/favorites.component";
import { JohnComponent} from "./page/john/john.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";


const appRoutes: Routes = [
  {path: 'favorites',component:FavoritesComponent},
]

@NgModule({
  declarations: [
    AppComponent,FavoritesComponent ,JohnComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
