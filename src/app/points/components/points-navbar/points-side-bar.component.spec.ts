import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsSideBarComponent } from './points-side-bar.component';

describe('PointsSideBarComponent', () => {
  let component: PointsSideBarComponent;
  let fixture: ComponentFixture<PointsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
