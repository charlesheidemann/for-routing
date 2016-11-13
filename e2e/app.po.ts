import { browser, element, by } from 'protractor';

export class ForRoutingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fr-root h1')).getText();
  }
}
