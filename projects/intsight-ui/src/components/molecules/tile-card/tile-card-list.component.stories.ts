// import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ListTileCardsComponent } from './tile-card-list.component';
import { TileCardComponent } from './tile-card.component';
import { TileCardModule } from './tile-card.module';

export default {
  title: 'Molecules/List TileCards',
  component: ListTileCardsComponent,
  decorators: [
    moduleMetadata({
      imports: [/*RouterModule.forRoot([]),*/ TileCardModule],
    }),
  ],
} as Meta<TileCardComponent>;

const Template: Story<ListTileCardsComponent> = (args: ListTileCardsComponent) => ({
  props: args,
});

export const List = Template.bind({});

List.args = {};
