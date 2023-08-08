import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { RangeSelectorComponent } from './range-selector.component';
import { ChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { datesData, numsData } from './range.mock';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

export default {
  title: 'Molecules/Range selector',
  component: RangeSelectorComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        FormsModule,
        ChartAllModule,
        RangeNavigatorAllModule,
        DatePickerModule
      ],
    }),
  ]
} as Meta;

const Template: Story<RangeSelectorComponent> = (args: RangeSelectorComponent) => ({
  props: args,
});

export const DateTime = Template.bind({});
DateTime.args = {
  name: 'Date',
  data: datesData,
  dataType: 'DateTime',
  minMax: [new Date('2017-05-02'), new Date('2017-05-04')]
};

export const Double = Template.bind({});
Double.args = {
  name: 'Double',
  data: numsData,
  dataType: 'Double',
  minMax: [2, 5]
};
