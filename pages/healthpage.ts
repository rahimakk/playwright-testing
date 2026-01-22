import { BASE_URL, loginbuton } from "../utils/env";
import { test, expect, Page } from '@playwright/test';

export class healthpage {
    constructor(private page: Page) { }
    async navigate() {
        await this.page.goto(BASE_URL);
    }

    async checkapplicationloads() {
        await expect(this.page).toHaveTitle(/Swag Labs/);
    }

    async loginbuttonvisible() {
        await expect(this.page.locator(loginbuton.loginbutton)).toBeVisible();
    }
}