import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './component/index.component';
import { FormsModule } from '@angular/forms';
import { SomeComponent } from '@/app/component/some-component/some.component';
import { TestComponent } from "@/app/component/test/test.component";

@NgModule({
  declarations: [
    IndexComponent,
    SomeComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: IndexComponent
    }])
  ]
})
export class IndexModule { }
