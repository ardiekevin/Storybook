import { RouterModule } from '@angular/router';
import {Story, Meta, moduleMetadata} from '@storybook/angular';
import { SearchBoxModule } from '../../molecules/search-box/search-box.module';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { IconButtonComponent } from './icon-button.component';
import { IconButtonModule } from './icon-button.module';
import { AtomToolbarModule } from '../atom-toolbar/atom-toolbar.module';

export default {
  title: 'Atoms/Icon Button',
  component: IconButtonComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      imports: [RouterModule.forRoot([]), UiFrameworkModule, IconButtonModule, SearchBoxModule],
    }),
  ]
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  svgIcon: './../../../assets/images/svg/icons/search.svg'
};
