import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemeListComponent

            },
            {
                path: ':themeId',
                component: ThemeContentComponent

            }
        ]
    },
    {
        path: 'add-theme',
        component: NewThemeComponent,
        canActivate: [AuthActivate],
        data: {
           authenticationRequired: true,
           authenticationFailureRedirectUrl: '/login'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
