import { ChartComponent } from './componentes/chart/chart.component';
import { CategoryListComponent } from './componentes/category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './componentes/layout/layout.component';
import { AddLayoutComponent } from './componentes/add-layout/add-layout.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    //{ path: '', component:ChartComponent},//CategoryListComponent
    { path: '', component:LayoutComponent},//CategoryListComponent

    { path: 'add', component: AddLayoutComponent  },
    { path: '**', component: PageNotFoundComponent }
  ];

  export const routes = RouterModule.forRoot(appRoutes, { useHash: false });

  