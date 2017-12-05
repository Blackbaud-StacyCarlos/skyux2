import { Injectable } from '@angular/core';

import { SkyActionButtonDemoComponent } from './action-button';

@Injectable()
export class SkyDemoService {
  public components: any[] = [
    {
      name: 'Action button',
      component: SkyActionButtonDemoComponent
    }
  ];
}
