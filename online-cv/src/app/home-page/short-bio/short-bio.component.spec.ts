import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBioComponent } from './short-bio.component';

describe('ShortBioComponent', () => {
  let component: ShortBioComponent;
  let fixture: ComponentFixture<ShortBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
