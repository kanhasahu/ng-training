import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatComponent } from './great.component';

describe('GreatComponent', () => {
  let component = new GreatComponent();
  // let fixture: ComponentFixture<GreatComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ GreatComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(GreatComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  
  it('should check author name', () => {
    expect(component.author('Mark')).toContain('Mark');
  });

  
});
