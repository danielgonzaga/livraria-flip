import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule } from '../icons/icons.module';
import { NumberCommaPipe } from './pipes/number-comma/number-comma.pipe';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputButtonComponent } from './components/input-button/input-button.component';
import { NumberBoxComponent } from './components/number-box/number-box.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NumberCommaPipe,
    InputNumberComponent,
    InputButtonComponent,
    NumberBoxComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    NavbarComponent,
    NumberCommaPipe,
    InputNumberComponent,
    InputButtonComponent,
    NumberBoxComponent
  ]
})
export class SharedModule { }
