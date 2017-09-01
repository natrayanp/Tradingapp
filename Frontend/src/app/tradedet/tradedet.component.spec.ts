import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradedetComponent } from './tradedet.component';

describe('TradedetComponent', () => {
  let component: TradedetComponent;
  let fixture: ComponentFixture<TradedetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradedetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
