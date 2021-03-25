import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconsolasComponent } from './reconsolas.component';

describe('ReconsolasComponent', () => {
  let component: ReconsolasComponent;
  let fixture: ComponentFixture<ReconsolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconsolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
