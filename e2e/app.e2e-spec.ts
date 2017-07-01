import { MyRecipeAppPage } from './app.po';

describe('my-recipe-app App', () => {
  let page: MyRecipeAppPage;

  beforeEach(() => {
    page = new MyRecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
