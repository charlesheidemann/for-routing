import { ForRoutingPage } from './app.po';

describe('for-routing App', function() {
  let page: ForRoutingPage;

  beforeEach(() => {
    page = new ForRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fr works!');
  });
});
