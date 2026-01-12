import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VellenComponent } from './vellen.component';

describe('VellenComponent', () => {
  let component: VellenComponent;
  let fixture: ComponentFixture<VellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VellenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
