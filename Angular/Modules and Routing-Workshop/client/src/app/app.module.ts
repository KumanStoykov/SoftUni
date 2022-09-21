import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardMainComponent } from './card-main/card-main.component';
import { CardAsideComponent } from './card-aside/card-aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ForumService } from './forum.service';
import { HttpClientModule } from '@angular/common/http';
import { AsideListComponent } from './aside-list/aside-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardMainComponent,
    CardAsideComponent,
    ThemeListComponent,
    AsideListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ForumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
