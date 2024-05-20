import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";



@Component({
  selector: 'app-cars-comp',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cars-comp.component.html',
  styleUrl: './cars-comp.component.scss'
})
export class CarsCompComponent {

 evcars: { brand: string, model: string} []
 hcars: { brand : string, model: string} []

  constructor() {
    this.evcars = [
      { brand: 'Tesla', model: 'Model Y' },
      { brand: 'Tesla', model: 'Model 3' },
      { brand: 'Tesla', model: 'Model S' },
      { brand: 'Tesla', model: 'Model Y' },
    ];

    this.hcars = [
      { brand : 'Toyota', model: 'CHR'},
      { brand : 'Kia', model: 'Niro'},
    ]
  }

}
