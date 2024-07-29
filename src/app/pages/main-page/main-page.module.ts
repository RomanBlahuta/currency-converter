import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {HeaderModule} from "../../components/header/header.module";
import {CurrencyCardModule} from "../../components/currency-card/currency-card.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainPageRoutingModule,
    CurrencyCardModule
  ]
})
export class MainPageModule { }
