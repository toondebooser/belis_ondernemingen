import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrezenComponent } from './frezen.component';

describe('FrezenComponent', () => {
  let component: FrezenComponent;
  let fixture: ComponentFixture<FrezenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrezenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrezenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
