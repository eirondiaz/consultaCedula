import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarddataComponent } from './carddata/carddata.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AcercadeComponent } from './acercade/acercade.component';

const rutas: Routes = [
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: '',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarddataComponent,
    MainComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
