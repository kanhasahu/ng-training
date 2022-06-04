import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getArea(length: number, breath: number): number{
    return length * breath;
  }

  getParameter(length: number, breath: number): number{
    return 2 * (length + breath);
  }

}
