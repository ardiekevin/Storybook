import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileCard } from './tile-card.model';

import { AngularSvgIconModule } from 'angular-svg-icon';
import {expect, jest, test} from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TileCardComponent } from './tile-card.component';

describe('TileCardComponent', () => {
  let component: TileCardComponent;
  let fixture: ComponentFixture<TileCardComponent>;

  const tileMock: TileCard = {
    id: `${new Date().getTime()}`,
    name: 'Credentials',
    thumbnailUrl: 'https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg',
    type: 'datamodel',
    isFavorite: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TileCardComponent],
      imports: [HttpClientTestingModule ,AngularSvgIconModule.forRoot(), AngularSvgIconModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TileCardComponent);
    component = fixture.componentInstance;

    // fill mock
    component.tile = tileMock;
    fixture.detectChanges();
  });

  describe('constructor', () => {
    it('should create an instance of component', () => {
      expect(component).toBeTruthy();
    });

    it('should init the component with the default values and members', () => {
      expect(component.hrefLink).toBeUndefined();
      expect(component.favoriteStatusChanged).toBeInstanceOf(EventEmitter);
      expect(component.tileClicked).toBeInstanceOf(EventEmitter);
    });
  });

  describe('onTileCardClicked', () => {
    it('should create an instance of component', () => {
      const tileClickedSpy = jest.spyOn(component.tileClicked, 'emit');

      component.onTileCardClicked();
      expect(tileClickedSpy).toBeCalledWith(tileMock);
    });
  });

  describe('onFavoriteStatusChanged', () => {
    it('should change the "tile.IsFavorite" status once the user clicks on the button', () => {
      const favoriteStatusChangedSpy = jest.spyOn(
        component.favoriteStatusChanged,
        'emit'
      );

      component.tile.isFavorite = true; // fake value to expect false
      component.onFavoriteStatusChanged();

      expect(component.tile.isFavorite).toBeFalsy();
      expect(favoriteStatusChangedSpy).toBeCalledWith(false);
    });
  });
});
