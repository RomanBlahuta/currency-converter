import {CurrencyEnum} from "./utils";

export enum ResultEnum {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ExchangeRateDto {
  result: ResultEnum;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: CurrencyEnum;
  conversion_rates: {
    [CurrencyEnum.USD]: number;
    [CurrencyEnum.EUR]: number;
    [CurrencyEnum.UAH]: number;
  };
}

export interface ExchangeRateErrorDto {
  result: ResultEnum;
  'error-type': string;
}
