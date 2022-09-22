import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMainComponent } from './card-main/card-main.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { AsideListComponent } from './aside-list/aside-list.component';
import { CardAsideComponent } from './card-aside/card-aside.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeContentComponent } from './theme-content/theme-content.component';



@NgModule({
    declarations: [
        ThemeContentComponent,
        CardMainComponent,
        ThemeListComponent,
        NewThemeComponent,
        AsideListComponent,
        CardAsideComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ThemeRoutingModule,
    ]
})
export class ThemeModule { }
