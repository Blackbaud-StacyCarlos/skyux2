import { NgModule } from '@angular/core';

import { SkyModule } from './core';

import {
  SkyDemoService,
  SkyActionButtonDemoComponent
} from './demos';

const components = [
  SkyActionButtonDemoComponent
];

@NgModule({
  providers: [SkyDemoService],
  imports: [SkyModule],
  exports: components,
  entryComponents: components,
  declarations: components
})
export class SkyDemoModule { }

export * from './demos';
