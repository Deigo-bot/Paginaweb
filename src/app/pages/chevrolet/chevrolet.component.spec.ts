import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevroletComponent } from './chevrolet.component';

describe('ChevroletComponent', () => {
  let component: ChevroletComponent;
  let fixture: ComponentFixture<ChevroletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChevroletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevroletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
