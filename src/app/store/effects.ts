import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpActions, InputActions} from "./actions";
import {catchError, map, mergeMap, of, switchMap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {CurrencyHttpService} from "../services/currency-http.service";
import {MainSelectors} from "./selectors";
import {FromTo} from "../pages/main-page/main-page.component";

@Injectable()
export class MainEffects {
  public loadRates$ = createEffect(() => this.actions$.pipe(
    ofType(HttpActions.loadRates),
    mergeMap((action) => this.showHttp.getRate(action.currency).pipe(
        map(response => HttpActions.loadRatesSuccess({response, currency: response.base_code})),
        catchError((error) => of(HttpActions.loadRatesFailure(error))),
      )
    )
  ));

  public selectedCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(InputActions.selectInput),
    withLatestFrom(this.store$.select(MainSelectors.selectPairConversionData)),
    map(([action, data]) => InputActions.textFieldInput({field: FromTo.FROM, value: data.convertFrom.value}))
  ));

  constructor(private store$: Store,
              private showHttp: CurrencyHttpService,
              private actions$: Actions) {
  }
}
