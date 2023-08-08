import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule, 
    IconButtonModule, 
    AngularSvgIconModule
  ],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule { }
