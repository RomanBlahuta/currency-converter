import {Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from "./header.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @Input()
  public model: HeaderModel = HeaderModel.create(new BehaviorSubject("Loading"), new BehaviorSubject("Loading"), {});

  public ngOnInit(): void {
  }

}
