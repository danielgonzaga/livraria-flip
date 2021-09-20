import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Minus, Plus, PlusCircle, ShoppingCart, XCircle } from 'angular-feather/icons';

const icons = {
  ShoppingCart,
  PlusCircle,
  Plus,
  Minus,
  XCircle
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
