import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  text: string = 'Bienvenue sur mon site';

  @ViewChildren('animatedLetter') letters: QueryList<ElementRef> = new QueryList<ElementRef>();  // Initialiser comme un tableau vide

  constructor() {}

  ngAfterViewInit() {
    const lettersArray = this.letters.toArray().map(el => el.nativeElement);
    gsap.fromTo(lettersArray, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5
    });
  }
}
