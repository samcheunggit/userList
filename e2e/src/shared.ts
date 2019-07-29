import { browser, by, element } from 'protractor';

export class Shared {
  navigateTo(path = '') {
    return browser.get(browser.baseUrl + path) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .title')).getText() as Promise<string>;
  }

  getLoadingIcon() {
    return browser.driver.findElement(by.css('.list-container mat-spinner'));
  }

  getCard() {
    return element.all(by.css('.list-container mat-card')).first();
  }

  getErrorHeader() {
    return element(by.css('app-root .error-text h1')).getText() as Promise<string>;
  }

  getErrorMessage() {
    return element(by.css('app-root .error-text')).getText() as Promise<string>;
  }
}
