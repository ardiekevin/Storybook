import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { TileCardComponent } from './tile-card.component';
import { TileCardModule } from './tile-card.module';

export default {
  title: 'Molecules/TileCard',
  component: TileCardComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterModule.forRoot([]), UiFrameworkModule, TileCardModule],
    }),
  ],
} as Meta<TileCardComponent>;

const Template: Story<TileCardComponent> = (args: TileCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  tile: {
    id: '1',
    name: 'default',
    thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
    type: 'datamodel',
    isFavorite: false,
  },
};

export const Favorite = Template.bind({});

Favorite.args = {
  tile: {
    id: '1',
    name: 'including favorite btn',
    thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
    type: 'datamodel',
    isFavorite: false,
  },
  showBtnFavorite: true,
};

export const Link = Template.bind({});

Link.args = {
  tile: {
    id: '1',
    name: 'This is a category link',
    thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
    type: 'category',
    isFavorite: false,
  },
  showBtnFavorite: true,
  hrefLink: './hello-word',
};
