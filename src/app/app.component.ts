import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {HttpActions} from "./store/actions";
import {CurrencyEnum} from "./utils/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'usense-test-task';

  constructor(private store$: Store) {
  }

  public ngOnInit(): void {
    this.store$.dispatch(HttpActions.loadRates({currency: CurrencyEnum.EUR}));
    this.store$.dispatch(HttpActions.loadRates({currency: CurrencyEnum.UAH}));
    this.store$.dispatch(HttpActions.loadRates({currency: CurrencyEnum.USD}));
  }
}
