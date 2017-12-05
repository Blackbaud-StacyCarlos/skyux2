import { Injectable } from '@angular/core';

import { SkyActionButtonDemoComponent } from './action-button';
import { SkyAlertDemoComponent } from './alert';
import { SkyAvatarDemoComponent } from './avatar';
import { SkyCardDemoComponent } from './card';

@Injectable()
export class SkyDemoService {
  public components: any[] = [
    {
      name: 'Action button',
      component: SkyActionButtonDemoComponent
    },
    {
      name: 'Alert',
      component: SkyAlertDemoComponent
    },
    {
      name: 'Avatar',
      component: SkyAvatarDemoComponent
    },
    {
      name: 'Card',
      component: SkyCardDemoComponent
    }
  ];
}
