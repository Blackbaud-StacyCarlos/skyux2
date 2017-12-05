import {
  Component
} from '@angular/core';

import {
  SkyDemoService
} from './public';

@Component({
  selector: 'sky-demo-home',
  templateUrl: './home.component.html'
})
export class SkyDemoHomeComponent {
  public components: any;
  public selectedComponent: any;

  constructor(
    private demoService: SkyDemoService
  ) {
    this.components = this.demoService.components;
  }

  public open(component: any) {
    this.selectedComponent = component;
  }
}
