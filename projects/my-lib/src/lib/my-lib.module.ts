import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [MyLibComponent, ButtonComponent],
  imports: [
  ],
  exports: [MyLibComponent, ButtonComponent]
})
export class MyLibModule { }
