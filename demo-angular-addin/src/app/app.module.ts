import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { registerLocale } from '@abp/ng.core/locale';
import { CoreModule } from '@abp/ng.core';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    StartComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
