import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {mainReducer} from "./reducers";

export interface ToConvert {
  value: string;
  currency: string;
}

export interface Rates {
  USD: number;
  UAH: number;
  EUR: number;
}

export interface MainPageState {
  convertTo: ToConvert;
  convertFrom: ToConvert;
  rates: {
    USD: Rates;
    EUR: Rates;
    UAH: Rates;
  };
}

export interface State {
  main: MainPageState;
}

export const reducers: ActionReducerMap<State> = {
  main: mainReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
