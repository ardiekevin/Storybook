import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TileCardComponent } from './tile-card.component';

@NgModule({
  declarations: [TileCardComponent],
  imports: [CommonModule, RouterModule, AngularSvgIconModule ],
  exports: [TileCardComponent],
})
export class TileCardModule {}
