import { test, expect } from '@playwright/test';
test('Login page should load', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.locator('h2')).toHaveText('Login Page');
});
