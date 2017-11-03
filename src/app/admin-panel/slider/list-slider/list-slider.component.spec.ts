import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSliderComponent } from './list-slider.component';

describe('ListSliderComponent', () => {
  let component: ListSliderComponent;
  let fixture: ComponentFixture<ListSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
