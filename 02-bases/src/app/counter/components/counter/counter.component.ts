import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ counter }}</h2>

    <button (click)="increaseBy(1)" class="btn btn-primary mx-2">+1</button>
    <button (click)="resetCounter()" class="btn btn-primary">Reset</button>
    <button (click)="increaseBy(-1)" class="btn btn-primary mx-2">-1</button>
  `
})

export class CounterComponent{
  constructor() { }

  public counter: number = 0;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 0;
  }

}
