import {Observable} from "rxjs";

export class HeaderModel {
  public USDtoUAH: Observable<string>;
  public EURtoUAH: Observable<string>;

  constructor(USDtoUAH: Observable<string>, EURtoUAH: Observable<string>) {
    this.USDtoUAH = USDtoUAH;
    this.EURtoUAH = EURtoUAH;
  }

  public static create(USDtoUAH: Observable<string>, EURtoUAH: Observable<string>): HeaderModel {
    return new HeaderModel(USDtoUAH, EURtoUAH);
  }
}
