import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './template/nav-bar/nav-bar.component';
import { FooterComponent } from './template/footer/footer.component';
import { ErrorComponent } from './template/error/error.component';
import { HomeComponent } from './template/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { SideBarComponent } from './template/side-bar/side-bar.component';



// importar componentes


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
