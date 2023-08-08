import { RouterModule } from '@angular/router';
import {Story, Meta, moduleMetadata} from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { SearchBoxModule } from '../search-box/search-box.module';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarModule } from './toolbar.module';
import { DropdownButtonModule } from '../dropdown-button/dropdown-button.module';

export default {
  title: 'Atoms/Toolbar',
  component: ToolbarComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      imports: [
        RouterModule.forRoot([]), 
        UiFrameworkModule, 
        ToolbarModule, 
        SearchBoxModule, 
        IconButtonModule, 
        AngularSvgIconModule,
        DropdownButtonModule
      ],
    }),
  ]
} as Meta;

const Template: Story<ToolbarComponent> = (args: ToolbarComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {};

export const RTL = Template.bind({});
RTL.args = {
  isRTL: true
};