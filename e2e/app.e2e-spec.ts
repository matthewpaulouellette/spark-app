import { SparkAppPage } from './app.po';

describe('spark-app App', function() {
  let page: SparkAppPage;

  beforeEach(() => {
    page = new SparkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
