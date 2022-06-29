import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { TemplateComponent } from './template/template.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { IeGuard } from './guards/ie.guard';
import { IeComponent } from './ie/ie.component';
import { DesktopComponent } from './desktop/desktop.component';
import { DesktopGuard } from './guards/desktop.guard';

const routes: Routes = [
  // Reason for this navigation:  word tries to navigate to directly taskpane.html. if it isn't necessary feel free to remove
  { path: 'taskpane.html', redirectTo: 'start', pathMatch: 'full' },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [DesktopGuard, IeGuard],
  },
  {
    path: 'ie',
    component: IeComponent,
  },
  {
    path: 'desktop',
    component: DesktopComponent,
  },
  {
    path: 'start',
    component: AppLayoutComponent,
    canActivate: [DesktopGuard, IeGuard, AuthGuard],
    children: [
      {
        path: '',
        component: StartComponent,
        children: [{ path: '', component: TemplateComponent, pathMatch: 'full' }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
