import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  it('getarea() should be 200, when length and breath is 20 and 10', () => {
    const cal = new CalculatorComponent();
    const actualResponse = cal.getArea(20, 10);
    const expectedResponse = 200; 
    expect(actualResponse).toBe(expectedResponse);
  })


  it('getarea() should be 400, when length and breath is 20 and 20', () => {
    const cal = new CalculatorComponent();
    const actualResponse = cal.getArea(20, 20);
    const expectedResponse = 400; 
    expect(actualResponse).toBe(expectedResponse);
  })
})


describe('CalculatorComponent', () => {
  it('getparameter() should be 60, when length and breath is 20 and 10', () => {
    const cal = new CalculatorComponent();
    const actualResponse = cal.getParameter(20, 10);
    const expectedResponse = 60; 
    expect(actualResponse).toBe(expectedResponse);
  })


  it('getparameter() should be 100, when length and breath is 40 and 10', () => {
    const cal = new CalculatorComponent();
    const actualResponse = cal.getParameter(40, 10);
    const expectedResponse = 100; 
    expect(actualResponse).toBeGreaterThanOrEqual(expectedResponse);
  })
})

// describe('CalculatorComponent', () => {
//   let component: CalculatorComponent;
//   let fixture: ComponentFixture<CalculatorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CalculatorComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CalculatorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
