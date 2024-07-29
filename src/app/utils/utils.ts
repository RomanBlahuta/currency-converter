import {API_BASE, API_KEY} from "./constants";
import {MainPageState} from "../store";

export function composeUrl(endpoint: string): string {
  return `${API_BASE}/${API_KEY}/${endpoint}`
}

export enum CurrencyEnum {
  UAH = 'UAH',
  EUR = 'EUR',
  USD = 'USD',
}
