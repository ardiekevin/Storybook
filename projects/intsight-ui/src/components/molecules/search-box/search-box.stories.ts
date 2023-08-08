import { RouterModule } from '@angular/router';
import {Story, Meta, moduleMetadata} from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { AtomToolbarModule } from '../../atoms/atom-toolbar/atom-toolbar.module';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { SearchBoxComponent } from './search-box.component';
import { SearchBoxModule } from './search-box.module';

export default {
  title: 'Molecules/Search Box',
  component: SearchBoxComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      imports: [
        RouterModule.forRoot([]), 
        UiFrameworkModule, 
        SearchBoxModule, 
        IconButtonModule, 
        AngularSvgIconModule
      ],
    }),
  ]
} as Meta;

const Template: Story<SearchBoxComponent> = (args: SearchBoxComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
};