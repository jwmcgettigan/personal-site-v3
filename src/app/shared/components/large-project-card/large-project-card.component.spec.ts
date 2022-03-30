import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeProjectCardComponent } from './large-project-card.component';

describe('ProjectCardComponent', () => {
  let component: LargeProjectCardComponent;
  let fixture: ComponentFixture<LargeProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
