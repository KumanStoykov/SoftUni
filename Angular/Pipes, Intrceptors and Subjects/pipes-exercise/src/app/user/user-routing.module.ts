import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamsActivate } from '../shared/guards/params.activate';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [

  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'user-detail',
    component: UserDetailComponent,
    canActivate: [ParamsActivate],
    data: {
        paramsActivate: ['id'],
        paramsActivateRedirectUrl: '/list'
    }
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
    canActivate: [ParamsActivate],
    data: {
        paramsActivate: ['id'],
        paramsActivateRedirectUrl: '/list'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
