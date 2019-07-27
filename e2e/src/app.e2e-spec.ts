import { Shared } from './shared';
import { browser, logging } from 'protractor';

describe('navbar', () => {
  let shared: Shared;

  beforeEach(() => {
    shared = new Shared();
  });

  it('should display title', () => {
    shared.navigateTo();
    expect(shared.getTitleText()).toEqual('User List');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
