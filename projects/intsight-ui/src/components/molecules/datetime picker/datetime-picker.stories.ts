import { Meta, moduleMetadata } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SearchBoxModule } from '../../molecules/search-box/search-box.module';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatetimePickerComponent } from './datetime-picker.component';

export default {
  title: 'Molecules/Date & Time Picker',
  component: DatetimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        UiFrameworkModule,
        AngularSvgIconModule,
        SearchBoxModule,
        ListViewAllModule,
        ListBoxAllModule,
      ],
    }),
  ],
} as Meta;

const Template = (args: DatetimePickerComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
