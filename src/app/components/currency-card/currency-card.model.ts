import {Observable} from "rxjs";
import {ToConvert} from "../../store";

export interface IOptional {
  title?: string;
  cardData?: Observable<ToConvert>;
  onInput?: (data: string) => void;
  onSelect?: (data: string) => void;
}

export class CurrencyCardModel {
  public optional: IOptional;

  constructor(optional?: IOptional) {
    this.optional = optional || {};
  }

  public static create(optional?: IOptional): CurrencyCardModel {
    return new CurrencyCardModel(optional);
  }
}
