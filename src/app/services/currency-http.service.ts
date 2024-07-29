import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {composeUrl, CurrencyEnum} from "../utils/utils";
import {ExchangeRateDto} from "../utils/exchange-rate.dto";

@Injectable({
  providedIn: 'root'
})
export class CurrencyHttpService {

  constructor(private http: HttpClient) { }

  public getRate(currency: CurrencyEnum): Observable<ExchangeRateDto> {
    return this.http.get<ExchangeRateDto>(composeUrl(`latest/${currency}`));
  }
}
