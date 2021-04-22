import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule  } from "@angular/material/icon";

import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { elaktaRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(elaktaRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
