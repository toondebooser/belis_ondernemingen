import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoeienComponent } from './snoeien.component';

describe('SnoeienComponent', () => {
  let component: SnoeienComponent;
  let fixture: ComponentFixture<SnoeienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnoeienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnoeienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
