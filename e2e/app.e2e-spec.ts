import { AlexProj2Page } from './app.po';

describe('alex-proj2 App', function() {
  let page: AlexProj2Page;

  beforeEach(() => {
    page = new AlexProj2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
