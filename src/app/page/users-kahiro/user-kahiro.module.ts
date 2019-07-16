import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersKahiroComponent } from './component/users-kahiro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersKahiroComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: UsersKahiroComponent
    }])
  ]
})
export class UsersKahiroModule { }
