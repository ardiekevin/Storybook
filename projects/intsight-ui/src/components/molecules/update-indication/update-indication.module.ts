import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SearchBoxModule } from '../search-box/search-box.module';
import { UpdateIndicationComponent } from './update-indication.component';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UiFrameworkModule } from '../../../ui-framework.module';
import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularSvgIconModule,
    IconButtonModule,
    SearchBoxModule,
    ListViewAllModule,
    UiFrameworkModule,
    ListBoxAllModule
  ],
  declarations: [
    UpdateIndicationComponent
  ],
  exports: [
    UpdateIndicationComponent
  ],
  bootstrap: [
    UpdateIndicationComponent
  ]
})
export class UpdateIndicationModule { }
