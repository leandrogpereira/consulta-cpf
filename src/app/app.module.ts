import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
