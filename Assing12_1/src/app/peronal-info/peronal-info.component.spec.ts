import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronalInfoComponent } from './peronal-info.component';

describe('PeronalInfoComponent', () => {
  let component: PeronalInfoComponent;
  let fixture: ComponentFixture<PeronalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeronalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeronalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
