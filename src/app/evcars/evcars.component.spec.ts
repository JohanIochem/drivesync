import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcarsComponent } from './evcars.component';

describe('EvcarsComponent', () => {
  let component: EvcarsComponent;
  let fixture: ComponentFixture<EvcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvcarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
