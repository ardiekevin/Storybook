import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SearchBoxModule } from '../../molecules/search-box/search-box.module';
import { AtomToolbarModule } from '../atom-toolbar/atom-toolbar.module';
import { IconButtonComponent } from './icon-button.component';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule],
  declarations: [
    IconButtonComponent
  ],
  exports: [
    IconButtonComponent
  ]
})
export class IconButtonModule { }