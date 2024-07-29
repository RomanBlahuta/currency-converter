import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {HttpActions} from "./store/actions";
import {CurrencyEnum} from "./utils/utils";
import {Observable} from "rxjs";
import {MainSelectors} from "./store/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'usense-test-task';
  public loading!: Observable<boolean>;

  constructor(private store$: Store) {
  }

  public ngOnInit(): void {
    this.loading = this.store$.select(MainSelectors.selectLoading);
    this.store$.dispatch(HttpActions.loadRates({currency: CurrencyEnum.EUR}));
    this.store$.dispatch(HttpActions.loadRates({currency: CurrencyEnum.UAH}));
    this.store$.dispatch(HttpActions.loadRates({currency: CurrencyEnum.USD}));
  }
}
