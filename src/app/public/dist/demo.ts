import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkyModule } from './core';

import {
  SkyDemoService,
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent
} from './demos';

const components = [
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent
];

@NgModule({
  providers: [SkyDemoService],
  imports: [
    CommonModule,
    FormsModule,
    SkyModule
  ],
  exports: components,
  entryComponents: components,
  declarations: components
})
export class SkyDemoModule { }

export * from './demos';
