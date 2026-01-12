import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerkoopComponent } from './verkoop.component';

describe('VerkoopComponent', () => {
  let component: VerkoopComponent;
  let fixture: ComponentFixture<VerkoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerkoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerkoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
