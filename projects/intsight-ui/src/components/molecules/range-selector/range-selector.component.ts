import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ChartTheme, RangeTooltip} from '@syncfusion/ej2-charts';
import {
  DataPoint,
  IChangedEventArgs,
  IRangeLoadedEventArgs,
  RangeTooltipSettingsModel,
  StyleSettingsModel
} from '@syncfusion/ej2-angular-charts';
import {RangeData, ValueType} from './range.model';

@Component({
  selector: 'ta9-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RangeSelectorComponent {
  @Input() name = '';
  @Input() isRTL = false;
  @Input() data: RangeData[] = [];
  @Input() dataType: ValueType = 'DateTime';
  @Input() minMax: Date[] | number[] = [];
  @Output() selectedData = new EventEmitter<DataPoint[]>();

  theme: ChartTheme;
  navigatorStyleSettings: StyleSettingsModel;
  xName = '';
  yName = '';
  width = '';
  startValue = '';
  endValue = '';
  minValue = '';
  maxValue = '';
  tooltip: RangeTooltipSettingsModel;

  constructor() {
    this.theme = 'Bootstrap5';
    this.xName = 'x';
    this.yName = 'y';
    this.width = '100%';
    this.startValue = '';
    this.endValue = '';
    this.minValue = '';
    this.maxValue = '';
    this.navigatorStyleSettings = {
      unselectedRegionColor: 'transparent'
    };
    this.tooltip = {
      enable: true,
      displayMode: 'Always',
      opacity: 0.65
    }
  }

  get isDate() {
    return this.dataType === 'DateTime';
  }

  setValue(data: string): string {
    if (this.dataType === 'DateTime') {
      return new Date(data).getDay() + '';
    }
    return data;
  }

  rangeHandler(args: IChangedEventArgs): void {
    if (args && args.name === 'changed') {
      const selectedData = args.selectedData;
      this.startValue = this.setValue(selectedData.slice(0)[0].x + '');
      this.endValue = this.setValue(selectedData.slice(-1)[0].x + '');
      this.selectedData.emit(selectedData);
    }
  }

  rangeLoad(args: IRangeLoadedEventArgs): void {
    args.rangeNavigator.rangeTooltipModule = new RangeTooltip(args.rangeNavigator);
    this.minValue = this.setValue(this.minMax[0] + '');
    this.maxValue = this.setValue(this.minMax[1] + '');
  }
}
