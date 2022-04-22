import { test, expect } from '@playwright/test';

//Override global config
test.use({
  // Tell all tests to load signed-in state from 'auth.json'.
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  // Go to https://www.reddit.com/
  await page.goto('https://www.reddit.com/');
  // Go to https://www.reddit.com/search/?q=pizza
  await page.goto('https://www.reddit.com/search/?q=pizza');
  // Go to https://www.reddit.com/r/Pizza/
  await page.goto('https://www.reddit.com/r/Pizza/');
});
