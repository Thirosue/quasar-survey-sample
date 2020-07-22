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
  console.log('正常系シナリオ実施....')

  browser = await puppeteer.launch();
  const page = await browser.newPage()
  const iPhone = puppeteer.devices['iPhone X']
  await page.emulate(iPhone);

  // top
  console.log('トップページにアクセスします...')
  await page.goto('https://thirosue.github.io/quasar-survey-sample/')

  await page.screenshot({ path: `${PrefixPath}top.png` })
  title = await page.$eval('.s-top-message', element => element.innerText);
  Assert.contains(title, '次へを押してアンケートを開始してください')

  await next(page)

  // Q1
  console.log('Q1にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q1.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q1')

  options = await page.$$('.q-radio');
  await options[0].click();

  store = await vuex(page)
  Assert.contains(store.haveSeen, '1')

  await next(page)

  // Q2
  console.log('Q2にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q2.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q2')

  options = await page.$$('.q-checkbox')
  await options[0].click()
  await options[7].click()
  await page.type('.q-placeholder', 'hoge')

  store = await vuex(page)
  Assert.includes(store.trigger, '99')
  Assert.contains(store.triggerText, 'hoge')

  await next(page)

  // Q3
  console.log('Q3にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q3.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q3')

  options = await page.$$('.q-checkbox')
  await options[0].click()
  await options[10].click()
  await page.type('.q-placeholder', 'fuga')

  store = await vuex(page)
  Assert.includes(store.impression, '99')
  Assert.contains(store.impressionText, 'fuga')

  await next(page)

  // Q4
  console.log('Q4にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q4.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q4')

  await next(page)

  // Q4-1
  console.log('Q4-1にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q4-1.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q4-1')

  options = await page.$$('.q-radio');
  await options[0].click();

  store = await vuex(page)
  Assert.contains(store.understand, '1')

  await next(page)

  // Q4-2
  console.log('Q4-2にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q4-2.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q4-2')

  options = await page.$$('.q-radio');
  await options[1].click();

  store = await vuex(page)
  Assert.contains(store.interested, '2')

  await next(page)

  // Q4-3
  console.log('Q4-3にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q4-3.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q4-3')

  options = await page.$$('.q-radio');
  await options[2].click();

  store = await vuex(page)
  Assert.contains(store.impressive, '3')

  await next(page)

  // Q4-4
  console.log('Q4-4にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q4-4.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q4-4')

  options = await page.$$('.q-radio');
  await options[3].click();

  store = await vuex(page)
  Assert.contains(store.wantToBuy, '4')

  await next(page)

  // Q5
  console.log('Q5にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q5.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q5')

  options = await page.$$('.q-checkbox')
  await options[0].click()
  await options[4].click()

  store = await vuex(page)
  Assert.includes(store.WhatKindOfAction, '0')

  await next(page)

  // Q6
  console.log('Q6にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q6.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q6')

  options = await page.$$('.q-radio');
  await options[0].click();

  store = await vuex(page)
  Assert.contains(store.sex, '1')

  await next(page)

  // Q7
  console.log('Q7にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q7.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q7')

  options = await page.$('.q-select');
  await options.click();

  await Promise.all([
    page.waitFor('.q-item'),
    page.waitFor(1000),
  ])
  options = await page.$$('.q-item')
  await options[3].click();

  store = await vuex(page)
  Assert.contains(store.age, '4')

  await Promise.all([
    page.waitFor(() => !document.querySelector('.q-menu')),
    page.waitFor(1000),
  ])
  await next(page)

  // Q8
  console.log('Q8にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}Q8.png` })
  title = await page.$eval('.s-question', element => element.innerText);
  Assert.contains(title, 'Q8')

  options = await page.$('.q-select');
  await options.click();

  await Promise.all([
    page.waitFor('.q-item'),
    page.waitFor(1000),
  ])
  options = await page.$$('.q-item')
  await options[12].click();

  store = await vuex(page)
  Assert.contains(store.prefectures, '13')

  await Promise.all([
    page.waitFor(() => !document.querySelector('.q-menu')),
    page.waitFor(1000),
  ])
  await next(page)

  // 最後に
  console.log('最後ににアクセスします...')
  await page.screenshot({ path: `${PrefixPath}end.png` })
  title = await page.$eval('.text-h6', element => element.innerText);
  Assert.contains(title, '最後に')

  await page.type('.q-placeholder', 'piyo')

  store = await vuex(page)
  Assert.contains(store.freeComment, 'piyo')

  await next(page)

  // 回答結果
  console.log('回答結果にアクセスします...')
  await page.screenshot({ path: `${PrefixPath}results.png` })
  title = await page.$eval('.text-h6', element => element.innerText);
  Assert.contains(title, 'ご回答ありがとうございました')

  const results = await page.$eval('.text-subtitle1', element => element.innerText)
  console.log(results)
  Assert.contains(results, '見たような気がする')
  Assert.contains(results, 'hoge')
  Assert.contains(results, 'fuga')
  Assert.contains(results, 'あてはまる')
  Assert.contains(results, 'ややあてはまる')
  Assert.contains(results, 'どちらともいえない')
  Assert.contains(results, 'あまりあてはまらない')
  Assert.contains(results, 'あてはまるものはない')
  Assert.contains(results, '男性')
  Assert.contains(results, '40〜49歳')
  Assert.contains(results, '東京都')
  Assert.contains(results, 'piyo')

  await browser.close()
})()
