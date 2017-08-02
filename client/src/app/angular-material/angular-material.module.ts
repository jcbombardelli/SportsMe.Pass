import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdCheckboxModule, MdInputModule} from "@angular/material"

@NgModule({
  imports: [
    CommonModule, MdCheckboxModule, MdButtonModule, MdInputModule
  ],
  exports: [MdCheckboxModule, MdButtonModule, MdInputModule]
})
export class AngularMaterialModule { }
