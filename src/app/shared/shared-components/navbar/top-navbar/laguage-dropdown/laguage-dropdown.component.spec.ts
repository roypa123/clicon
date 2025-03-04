import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaguageDropdownComponent } from './laguage-dropdown.component';

describe('LaguageDropdownComponent', () => {
  let component: LaguageDropdownComponent;
  let fixture: ComponentFixture<LaguageDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaguageDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaguageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
