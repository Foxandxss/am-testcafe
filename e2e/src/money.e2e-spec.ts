import { LoginPage, adminUser } from './login.po';
import { NavPage } from './nav.po';
import { MoneyPage } from './money.po';

const loginPage = new LoginPage();
const navPage = new NavPage();
const moneyPage = new MoneyPage();

fixture('Money')
  .page('http://localhost:4200');

test('shouldnt navigate to addmoney if we are not logged in', async t => {
  await t
    .click(navPage.navItemsLoggedIn.addmoney)
    .expect(loginPage.header.exists).ok();
});

test('has a button to increase the money', async t => {
  await t
    .useRole(adminUser)
    .expect(navPage.navItemsLoggedIn.cash.textContent).contains(0)
    .click(navPage.navItemsLoggedIn.addmoney)
    .click(moneyPage.cashButton)
    .expect(navPage.navItemsLoggedIn.cash.textContent).contains(100);
});
