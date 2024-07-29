import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCardComponent } from './currency-card.component';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";



@NgModule({
    declarations: [
        CurrencyCardComponent
    ],
    exports: [
        CurrencyCardComponent
    ],
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatFormField
  ]
})
export class CurrencyCardModule { }
