import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumService } from './forum.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    ThemeModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ForumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
