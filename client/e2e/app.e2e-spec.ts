import { Mwd1Page } from './app.po';

describe('mwd1 App', function() {
  let page: Mwd1Page;

  beforeEach(() => {
    page = new Mwd1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
