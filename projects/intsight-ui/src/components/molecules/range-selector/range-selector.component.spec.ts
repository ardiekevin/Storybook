import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { RangeSelectorComponent } from './range-selector.component';
import { IChangedEventArgs } from '@syncfusion/ej2-angular-charts';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import {expect, jest} from '@jest/globals';

describe('RangeNavigatorComponent', () => {
  let component: RangeSelectorComponent;
  let fixture: ComponentFixture<RangeSelectorComponent>;

  const rangeChangedMock: IChangedEventArgs = {
    cancel: false,
    start: 1,
    end: 3,
    name: 'changed',
    selectedData: [
      { x: 2, y: 4 }
    ],
    // selectedPeriod: '',
    zoomFactor: 0.2,
    zoomPosition: 0.1
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeSelectorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('set default values', () => {
      expect(component.selectedData).toBeInstanceOf(EventEmitter);
      expect(component.isRTL).toBeDefined();
      expect(component.data).toBeDefined();
      expect(component.dataType).toBeDefined();
      expect(component.minMax).toBeDefined();
    });
  });

  describe('range change', () => {
    it('range changed', () => {
      const rangeInitSpy = jest.spyOn(component.selectedData, 'emit');
      if (rangeChangedMock.name === 'changed') {
        component.rangeHandler(rangeChangedMock);
        expect(rangeInitSpy).toBeCalledWith(rangeChangedMock.selectedData);
      }
    });
  });

  describe('check data type', () => {
    it('data is DateTime type', () => {
      component.dataType = 'DateTime';
      fixture.debugElement.injector.get(ChangeDetectorRef).detectChanges();
      expect(fixture.debugElement.query(By.css('.date-range'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('.double-range'))).toBeNull();
    });

    it('data is Double type', () => {
      component.dataType = 'Double';
      fixture.debugElement.injector.get(ChangeDetectorRef).detectChanges();
      expect(fixture.debugElement.query(By.css('.double-range'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('.data-range'))).toBeNull();
    });
  });
});
