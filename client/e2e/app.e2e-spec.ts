import { BooksNetPage } from './app.po';

describe('books-net App', () => {
  let page: BooksNetPage;

  beforeEach(() => {
    page = new BooksNetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
