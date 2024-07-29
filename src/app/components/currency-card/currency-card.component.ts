import {Component, Input, OnInit} from '@angular/core';
import {CurrencyCardModel} from "./currency-card.model";

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent implements OnInit{
  @Input()
  public model: CurrencyCardModel = CurrencyCardModel.create('');

  public ngOnInit(): void {
  }

  public onSelect(data: string): void {
    if (this.model.optional.onSelect) {
      this.model.optional.onSelect(data);
    }
  }

  public onInput(event: Event): void {
    if (this.model.optional.onInput) {
      this.model.optional.onInput((event.target as HTMLInputElement).value);
    }
  }

}
