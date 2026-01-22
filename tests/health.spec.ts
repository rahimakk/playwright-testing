import { BASE_URL, loginbuton } from "../utils/env";
import { test, expect } from '@playwright/test';
import { healthpage } from "../pages/healthpage";

test.describe('@smoke Application health check', () => {
    test('application loads', async ({ page }) => {
        const hp = new healthpage(page);
        await hp.navigate();
        await hp.checkapplicationloads();
    })

    test('login button visibility', async ({ page }) => {
        const hp = new healthpage(page);
        await hp.navigate();
        await hp.loginbuttonvisible();
    })
})