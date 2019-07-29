import { Shared } from './shared';
import { browser, logging, by, element } from 'protractor';

describe('user list', () => {
  let shared: Shared;

  beforeEach(() => {
    shared = new Shared();
    shared.navigateTo();
  });

  it('should display title', () => {
    expect(shared.getTitleText()).toEqual('User List');
  });

  it('should display loading icon', async () => {
    await expect(shared.getLoadingIcon().isDisplayed()).toBe(true);
  });

  it('should display card and user details', async () => {
    const card = shared.getCard();
    const emailAnchor = card.all(by.css('mat-card-content a')).get(0);
    const addressAnchor = card.all(by.css('mat-card-content a')).get(1);
    const websiteAnchor = card.all(by.css('mat-card-content a')).get(2);

    await expect(card.isPresent()).toBe(true);
    expect(card.all(by.css('mat-card-title')).isPresent()).toBe(true);
    // Email
    expect(emailAnchor.all(by.css('mat-icon')).get(0).getText()).toEqual('email');
    expect(emailAnchor.all(by.css('input')).get(0).getAttribute('placeholder')).toEqual('Email');
    expect(emailAnchor.all(by.css('input')).get(0).getAttribute('value')).not.toBe('');
    expect(emailAnchor.getAttribute('href')).toContain('mailto:');
    // Address
    expect(addressAnchor.all(by.css('mat-icon')).get(0).getText()).toEqual('location_on');
    expect(addressAnchor.all(by.css('textarea')).get(0).getAttribute('placeholder')).toEqual('Address');
    expect(addressAnchor.all(by.css('textarea')).get(0).getAttribute('value')).not.toBe('');
    expect(addressAnchor.getAttribute('href')).toContain('https://www.google.com/maps/search/?api=1&query=');
    // Website
    expect(websiteAnchor.all(by.css('mat-icon')).get(0).getText()).toEqual('language');
    expect(websiteAnchor.all(by.css('input')).get(0).getAttribute('placeholder')).toEqual('Website');
    expect(websiteAnchor.all(by.css('input')).get(0).getAttribute('value')).not.toBe('');
    // check website should have http, otherwise it cannot be loaded.
    expect(addressAnchor.getAttribute('href')).toContain('http');
  });

  describe('error page', () => {
    const errorMsg = 'testing error message';

    it('should redirect to error page if no path matched', async () => {
      await shared.navigateTo('testing');
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'error');
      expect(shared.getErrorHeader()).toEqual('Something went wrong.....');
    });

    it('should show error page with message', async () => {
      await shared.navigateTo(`error/${errorMsg}`);
      expect(shared.getErrorMessage()).toContain(errorMsg);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
