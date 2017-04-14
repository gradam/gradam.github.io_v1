import { PersonalPagePage } from './app.po';

describe('personal-page App', () => {
  let page: PersonalPagePage;

  beforeEach(() => {
    page = new PersonalPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
