import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncObservablePipeComponent } from './async-observable-pipe.component';

describe('AsyncObservablePipeComponent', () => {
  let component: AsyncObservablePipeComponent;
  let fixture: ComponentFixture<AsyncObservablePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncObservablePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncObservablePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
