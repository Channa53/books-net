import { BooksNetClientPage } from './app.po';

describe('books-net-client App', () => {
  let page: BooksNetClientPage;

  beforeEach(() => {
    page = new BooksNetClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
