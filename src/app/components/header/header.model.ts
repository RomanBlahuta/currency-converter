import {Observable} from "rxjs";

export interface IOptional {

}

export class HeaderModel {
  public USDtoUAH: Observable<string>;
  public EURtoUAH: Observable<string>;
  public optional: IOptional;

  constructor(USDtoUAH: Observable<string>, EURtoUAH: Observable<string>, optional?: IOptional) {
    this.USDtoUAH = USDtoUAH;
    this.EURtoUAH = EURtoUAH;
    this.optional = optional || {};
  }

  public static create(USDtoUAH: Observable<string>, EURtoUAH: Observable<string>, optional?: IOptional): HeaderModel {
    return new HeaderModel(USDtoUAH, EURtoUAH, optional);
  }
}

