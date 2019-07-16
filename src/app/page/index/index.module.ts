import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './component/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: IndexComponent
    }])
  ]
})
export class IndexModule { }
