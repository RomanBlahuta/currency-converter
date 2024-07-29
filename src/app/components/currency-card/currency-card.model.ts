import {Observable} from "rxjs";
import {ToConvert} from "../../store";

export interface Optional {
  cardData?: Observable<ToConvert>;
  onInput?: (data: string) => void;
  onSelect?: (data: string) => void;
}

export class CurrencyCardModel {
  public title: String;
  public optional: Optional;

  constructor(title: string, optional?: Optional) {
    this.title = title;
    this.optional = optional || {};
  }

  public static create(title: string, optional?: Optional): CurrencyCardModel {
    return new CurrencyCardModel(title, optional);
  }
}
