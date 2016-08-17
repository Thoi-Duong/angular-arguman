import { ArgumanPage } from './app.po';

describe('arguman App', function() {
  let page: ArgumanPage;

  beforeEach(() => {
    page = new ArgumanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
