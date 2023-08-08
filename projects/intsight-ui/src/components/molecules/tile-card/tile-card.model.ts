export interface TileCard {
  id: string;
  name: string;
  thumbnailUrl: string;
  type: 'datamodel' | 'category' | 'apps';
  isFavorite?: boolean;
}
