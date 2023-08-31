import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { SearchBoxModule } from '../search-box/search-box.module';
import { DropdownButtonModule } from '../dropdown-button/dropdown-button.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [ToolbarComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    IconButtonModule,
    SearchBoxModule,
    DropdownButtonModule, 
    MatTooltipModule,
    BrowserModule, 
    FormsModule
  ],
  exports: [
    ToolbarComponent
  ],
})
export class ToolbarModule { }
