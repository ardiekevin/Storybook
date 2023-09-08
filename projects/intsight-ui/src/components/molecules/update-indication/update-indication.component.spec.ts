import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIndicationComponent } from './update-indication.component';

describe('UpdateIndicationComponent', () => {
  let component: UpdateIndicationComponent;
  let fixture: ComponentFixture<UpdateIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateIndicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
