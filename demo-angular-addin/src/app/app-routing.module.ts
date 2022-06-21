import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
];
const childRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      {
        path: 'start', component: StartComponent, children: [
          { path: '', component: TemplateComponent, pathMatch: 'full' },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(childRoutes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }