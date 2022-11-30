import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ComponentaComponent } from './componenta/Componenta.component';
import { ComponentbComponent } from './componentb/Componentb.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    ComponentbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
