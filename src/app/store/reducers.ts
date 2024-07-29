import {createReducer, on} from "@ngrx/store";
import {MainPageState} from "./index";
import {HttpActions, InputActions} from "./actions";
import {FromTo} from "../pages/main-page/main-page.component";
import {CurrencyEnum} from "../utils/utils";

export const initialState: MainPageState = {
  loading: false,
  convertTo: {
    value: '',
    currency: '',
  },
  convertFrom: {
    value: '',
    currency: '',
  },
  rates: {
    UAH: {
      USD: -1,
      UAH: -1,
      EUR: -1,
    },
    USD: {
      USD: -1,
      UAH: -1,
      EUR: -1,
    },
    EUR: {
      USD: -1,
      UAH: -1,
      EUR: -1,
    },
  }
}

export const mainReducer = createReducer(
  initialState,

  on(InputActions.textFieldInput, (state, {field, value}): MainPageState => {
    if (value == '') {
      return {
        ...state,
        convertFrom: {
          ...state.convertFrom,
          value: '',
        },
        convertTo: {
          ...state.convertTo,
          value: '',
        },
      };
    }
    else if (field == FromTo.FROM) {
      return {
        ...state,
        [field]: {
          ...state[field],
          value: value,
        },
        convertTo: {
          ...state.convertTo,
          value: (state.convertFrom.currency && state.convertTo.currency) ?
            (Number(value)*state.rates[state.convertFrom.currency as CurrencyEnum][state.convertTo.currency as CurrencyEnum]).toString()
            : state.convertTo.value
        }
      }
    }
    else {
      return {
        ...state,
        [field]: {
          ...state[field],
          value: value,
        },
        convertFrom: {
          ...state.convertFrom,
          value: (state.convertFrom.currency && state.convertTo.currency) ?
            (Number(value)*state.rates[state.convertTo.currency as CurrencyEnum][state.convertFrom.currency as CurrencyEnum]).toString()
            : state.convertFrom.value
        }
      };
    }
  }),
  on(InputActions.selectInput, (state, {field, value}) => ({
    ...state,
    [field]: {
      ...state[field],
      currency: value,
    },
  })),

  on(HttpActions.loadRates, (state) => ({
    ...state,
    loading: true,
  })),
  on(HttpActions.loadRatesSuccess, (state, {response, currency}) => ({
    ...state,
    loading: false,
    rates: {
      ...state.rates,
      [currency]: {
        USD: response.conversion_rates.USD,
        UAH: response.conversion_rates.UAH,
        EUR: response.conversion_rates.EUR,
      }
    }
  })),
  on(HttpActions.loadRatesFailure, (state, {error}) => {
    alert(error['error-type'])
    return {
      ...state,
      loading: false,
    };
  }),
);
