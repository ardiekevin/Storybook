import { Component } from '@angular/core';
import { TileCard } from './tile-card.model';

/**
 *  DO NOT EXPORT/EXPOSE THIS COMPONENT.
 *  THIS COMPONENT WAS ONLY CREATED FOR VISUALIZATION OF MULTIPLE TILECARDS-
 *  MAURICIO STAND /05/01/2023
 */

@Component({
  selector: 'ta9-list-tile-cards',
  template: `<ta9-tile-card
    *ngFor="let item of list"
    [showBtnFavorite]="item.showBtnFavorite"
    [hrefLink]="item.hrefLink"
    [tile]="item.tile"
  ></ta9-tile-card>`,
})
export class ListTileCardsComponent {
  list: Array<{
    hrefLink: string;
    showBtnFavorite: boolean;
    tile: TileCard;
  }> = [
    {
      hrefLink: '',
      showBtnFavorite: false,
      tile: {
        id: '2',
        name: 'first card default',
        thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
        type: 'datamodel',
        isFavorite: true,
      },
    },
    {
      hrefLink: './holamundosecond',
      showBtnFavorite: true,
      tile: {
        id: '54545',
        name: 'second card link',
        thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
        type: 'category',
        isFavorite: false,
      },
    },
    {
      hrefLink: '',
      showBtnFavorite: false,
      tile: {
        id: '2',
        name: '#3 card',
        thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
        type: 'datamodel',
        isFavorite: true,
      },
    },
    {
      hrefLink: './sdsadsa',
      showBtnFavorite: true,
      tile: {
        id: '5464356',
        name: '#4 card',
        thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
        type: 'datamodel',
        isFavorite: true,
      },
    },
    {
      hrefLink: './sdsadsa',
      showBtnFavorite: false,
      tile: {
        id: '5464356',
        name: 'second one',
        thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
        type: 'category',
        isFavorite: true,
      },
    },
  ];
}
