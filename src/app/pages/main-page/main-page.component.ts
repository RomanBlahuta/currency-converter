import {Component, OnInit} from '@angular/core';
import {CurrencyCardModel} from "../../components/currency-card/currency-card.model";
import {Store} from "@ngrx/store";
import {MainSelectors} from "../../store/selectors";
import {InputActions} from "../../store/actions";
import {HeaderModel} from "../../components/header/header.model";

export enum FromTo {
  TO = 'convertTo',
  FROM = 'convertFrom',
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  public cardFromModel!: CurrencyCardModel;
  public cardToModel!: CurrencyCardModel;
  public headerModel!: HeaderModel;

  constructor(private store$: Store) {
  }

  public ngOnInit(): void {
    this.createModels();
  }

  private createModels(): void {
    this.headerModel = HeaderModel.create(this.store$.select(MainSelectors.USDtoUAH), this.store$.select(MainSelectors.EURtoUAH));

    this.cardFromModel = CurrencyCardModel.create({
      title: 'Convert From',
      cardData: this.store$.select(MainSelectors.selectConvertFrom),
      onInput: this.onInputFrom.bind(this),
      onSelect: this.onSelectFrom.bind(this),
    });
    this.cardToModel = CurrencyCardModel.create({
      title: 'Convert To',
      cardData: this.store$.select(MainSelectors.selectConvertTo),
      onInput: this.onInputTo.bind(this),
      onSelect: this.onSelectTo.bind(this),
    });
  }

  private onInputTo(data: string): void {
    this.store$.dispatch(InputActions.textFieldInput({field: FromTo.TO, value: data}));
  }

  private onSelectTo(data: string): void {
    this.store$.dispatch(InputActions.selectInput({field: FromTo.TO, value: data}));
  }

  private onInputFrom(data: string): void {
    this.store$.dispatch(InputActions.textFieldInput({field: FromTo.FROM, value: data}));
  }

  private onSelectFrom(data: string): void {
    this.store$.dispatch(InputActions.selectInput({field: FromTo.FROM, value: data}));
  }

}
