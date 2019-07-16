import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('@/app/page/index/index.module').then(m => m.IndexModule) },
  { path: 'users/kahiro', loadChildren: () => import('@/app/page/users-kahiro/user-kahiro.module').then(m => m.UsersKahiroModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
