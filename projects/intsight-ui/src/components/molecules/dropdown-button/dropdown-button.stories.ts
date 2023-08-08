import { RouterModule } from '@angular/router';
import {Story, Meta, moduleMetadata} from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SearchBoxModule } from '../../molecules/search-box/search-box.module';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { DropdownButtonComponent } from './dropdown-button.component';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';

export default {
  title: 'Molecules/Dropdown Button',
  component: DropdownButtonComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([]),
        UiFrameworkModule,
        AngularSvgIconModule,
        IconButtonModule,
        SearchBoxModule,
        ListViewAllModule,
        ListBoxAllModule
      ],
      declarations: [
      ]
    }),
  ]
} as Meta;

const Template: Story<DropdownButtonComponent> = (args: DropdownButtonComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  svgIcon: './../../../assets/images/svg/icons/paint.svg',
  listTitle: 'Toolbar Buttons',
  listItems: [
    { text: 'Apps', icon: './../../../assets/images/svg/icons/apps.svg' },
    { text: 'Time', icon: './../../../assets/images/svg/icons/clock.svg' },
    { text: 'Edit', icon: './../../../assets/images/svg/icons/pencil.svg' },
  ]
};
