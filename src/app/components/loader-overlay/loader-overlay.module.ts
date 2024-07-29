import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderOverlayComponent } from './loader-overlay.component';
import {MatProgressSpinner} from "@angular/material/progress-spinner";



@NgModule({
    declarations: [
        LoaderOverlayComponent
    ],
    exports: [
        LoaderOverlayComponent
    ],
  imports: [
    CommonModule,
    MatProgressSpinner
  ]
})
export class LoaderOverlayModule { }
