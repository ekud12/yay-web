import { QuarWebPage } from './app.po';

describe('quar-web App', () => {
  let page: QuarWebPage;

  beforeEach(() => {
    page = new QuarWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
