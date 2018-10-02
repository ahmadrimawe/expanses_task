import { CategoryDataService } from './category-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
// route
import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { BottomNavComponent } from './componentes/bottom-nav/bottom-nav.component';

import { LayoutComponent } from './componentes/layout/layout.component';
import { AddLayoutComponent } from './componentes/add-layout/add-layout.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';


import { ComponentesComponent } from './componentes/componentes.component';
import { CategoryListComponent } from './componentes/category-list/category-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartComponent } from './componentes/chart/chart.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//import { NgVirtualKeyboardModule } from '@protacon/ng-virtual-keyboard';



@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,    
    LayoutComponent,
    AddLayoutComponent,
    PageNotFoundComponent,
    ComponentesComponent,
    CategoryListComponent,
    ChartComponent,
   ],
  imports: [
    BrowserModule,    
    AngularFontAwesomeModule,   
    routes,
    FormsModule,
HttpModule /*,
    NgVirtualKeyboardModule,*/

  ],
  providers: [CategoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
