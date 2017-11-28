#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function openPage(width, height) {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 0,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width,
    height,
  });

  await page.goto('http://localhost:9090/', {
    waitUntil: 'networkidle2',
  });

  return {
    browser,
    page,
  };
}

module.exports.openPage = openPage;
