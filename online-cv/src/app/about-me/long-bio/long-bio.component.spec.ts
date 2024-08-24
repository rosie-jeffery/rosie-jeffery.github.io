import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongBioComponent } from './long-bio.component';

describe('LongBioComponent', () => {
  let component: LongBioComponent;
  let fixture: ComponentFixture<LongBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
