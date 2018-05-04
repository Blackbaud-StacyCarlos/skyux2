import { SkyVisualTest} from '../../../config/utils/visual-test-commands';

import { element, by } from 'protractor';

describe('Colorpicker', () => {
  it('should match previous colorpicker screenshot', () => {
    return SkyVisualTest
      .setupTest('colorpicker')
      .then(() => {
        SkyVisualTest.moveCursorOffScreen();
        return SkyVisualTest.compareScreenshot({
          screenshotName: 'colorpicker-closed',
          selector: '#screenshot-colorpicker',
          checkAccessibility: false
        });
      });
  });

  it('should match previous opened screenshot', () => {
    return SkyVisualTest
      .setupTest('colorpicker')
      .then(() => {
        element(by.css('button.sky-btn')).click();
        SkyVisualTest.moveCursorOffScreen();
        return SkyVisualTest.compareScreenshot({
          screenshotName: 'colorpicker-opened',
          selector: '#screenshot-colorpicker2',
          checkAccessibility: false
        });
      });
  });
});
