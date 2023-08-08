import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class UiFrameworkModule {}
