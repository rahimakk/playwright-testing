import { test, expect } from "@playwright/test";
import { productpage } from "../pages/productpage";
import { loginpage } from "../pages/loginpage";

test('product page loads', async ({ page }) => {
    const product = new productpage(page);
    const login = new loginpage(page);
    await login.navigate();
    await login.login("standard_user", "secret_sauce");
    await login.checksuccessfullogin();
    await product.pageisvisible();

});

test('products page initially displays 6 items', async ({ page }) => {
    const product = new productpage(page);
    const login = new loginpage(page);
    await login.navigate();
    await login.login("standard_user", "secret_sauce");
    await login.checksuccessfullogin();
    await product.productscount();
});


test('Add backpack to cart', async ({ page }) => {
  const login = new loginpage(page);
  const products = new productpage(page);
  await login.navigate();
  await login.login('standard_user', 'secret_sauce');
  await login.checksuccessfullogin();
  await products.addBackpackToCart();
  await products.checkcartcount(1);
})