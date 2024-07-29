import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MainPageState} from "./index";
import {CurrencyEnum} from "../utils/utils";

const selectMainState = createFeatureSelector<MainPageState>(
  'main',
);

export namespace MainSelectors {

  export const selectConvertFrom = createSelector(selectMainState,
    (state) => state.convertFrom);

  export const selectConvertTo = createSelector(selectMainState,
    (state) => state.convertTo);

  export const selectPairConversionData = createSelector(selectMainState,
    (state) => ({
      convertFrom: state.convertFrom,
      convertTo: state.convertTo,
    }));

  export const USDtoUAH = createSelector(selectMainState,
    (state) => (Math.round(state.rates[CurrencyEnum.USD][CurrencyEnum.UAH]*100)/100).toString()
  );

  export const EURtoUAH = createSelector(selectMainState,
    (state) => (Math.round(state.rates[CurrencyEnum.EUR][CurrencyEnum.UAH]*100)/100).toString()
  );
}
