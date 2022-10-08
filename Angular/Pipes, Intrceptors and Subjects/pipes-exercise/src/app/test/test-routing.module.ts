import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
    {
        path: 'test',
        component: MainComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/test/one'
            },
            {
                path: 'one',
                component: OneComponent
            },
            {
                path: 'two',
                component: TwoComponent
            }

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
