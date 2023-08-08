import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { TileCard } from './tile-card.model';

@Component({
  selector: 'ta9-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileCardComponent {
  @HostBinding('attr.role') role = !this.hrefLink ? 'button' : 'link';

  @Input() tile!: TileCard;

  @Input() hrefLink?: string;

  @Input() showBtnFavorite = false;

  @Output() favoriteStatusChanged: EventEmitter<boolean> = new EventEmitter();

  @Output() tileClicked: EventEmitter<TileCard> = new EventEmitter();

  @HostListener('click') onTileCardClicked(): void {
    this.tileClicked.emit(this.tile);
  }

  onFavoriteStatusChanged(): void { 
    this.tile.isFavorite = !this.tile.isFavorite;
    this.favoriteStatusChanged.emit(this.tile.isFavorite);
  }
}
