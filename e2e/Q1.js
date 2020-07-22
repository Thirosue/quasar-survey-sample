/* eslint-disable */
const puppeteer = require('puppeteer');
const Assert = require('./utils/assert');
const next = require('./utils/next');
const vuex = require('./utils/vuex');

let browser;
let title;
let options;
let store;

const PrefixPath = 'e2e/';

(async () => {
  console.log('q1. Q1 テスト実施....')

  browser = await puppeteer.launch();
  const page = await browser.newPage()
  const iPhone = puppeteer.devices['iPhone X']
  await page.emulate(iPhone);

  // top
  console.log('q1-1. Q1にアクセスします...')
  await page.goto('https://thirosue.github.io/quasar-survey-sample/#/Q1')

  await page.screenshot({ path: `${PrefixPath}Q1.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q1')

  console.log('q1-2. バリデーションチェック...')
  await page.click('.primary-btn')
  const errorTxt = await page.$eval('.q-validation-error', element => element.innerText);
  Assert.contains(errorTxt, '選択してください')

  console.log('q1-3. 画面遷移チェック...')
  options = await page.$$('.q-radio');
  await options[0].click();

  store = await vuex(page)
  Assert.contains(store.haveSeen, '1')

  await next(page)

  await browser.close()
})()
