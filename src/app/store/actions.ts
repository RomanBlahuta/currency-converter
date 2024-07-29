import {createAction, props} from "@ngrx/store";
import {FromTo} from "../pages/main-page/main-page.component";
import {ExchangeRateDto, ExchangeRateErrorDto} from "../utils/exchange-rate.dto";
import {CurrencyEnum} from "../utils/utils";

export namespace InputActions {
  export const textFieldInput = createAction(
    '[Input] Text Field Input',
    props<{field: FromTo, value: string}>()
  );

  export const selectInput = createAction(
    '[Input] Select Input',
    props<{field: FromTo, value: string}>()
  );
}

export namespace HttpActions {
  export const loadRates = createAction(
    '[HTTP] Load Rates',
    props<{currency: CurrencyEnum}>()
  );

  export const loadRatesSuccess = createAction(
    '[HTTP] Load Rates Success',
    props<{response: ExchangeRateDto, currency: CurrencyEnum}>()
  );

  export const loadRatesFailure = createAction(
    '[HTTP] Load Rates Failure',
    props<{error: ExchangeRateErrorDto}>()
  );
}
