import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCoursesComponent } from './reg-courses.component';

describe('RegCoursesComponent', () => {
  let component: RegCoursesComponent;
  let fixture: ComponentFixture<RegCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
