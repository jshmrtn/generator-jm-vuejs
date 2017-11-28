// eslint-globals page
const path = require('path');
const support = require(path.resolve(process.env.PWD, 'test/browser.visual.js'));

let page;
let browser;
const width = 1024;
const height = 768;

beforeAll(async() => {

  const res = await support.openPage(width, height);

  page = res.page;
  browser = res.browser;

  const props = {
    title: 'Index Title',
  };

  await page.evaluate(function (props) {
    window.changeComponent('index', props);
  }, props);

});

afterAll(async() => {

  await page.close();
  await browser.close();

});

describe('visual: index', () => {

  it('should have matching image snapshot', async() => {

    const screenshot = await page.screenshot();

    expect(screenshot).toMatchImageSnapshot();

  });

});
