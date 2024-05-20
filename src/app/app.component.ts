import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarsCompComponent} from "./cars-comp/cars-comp.component";
import {CardComponent} from "./card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsCompComponent, CardComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drivesync';
}
