import { HomePage } from './home.po';
import { LoginPage, adminUser } from './login.po';
import { NavPage } from './nav.po';
import { BetPage } from './bet.po';

const homePage = new HomePage();
const loginPage = new LoginPage();
const navPage = new NavPage();
const betPage = new BetPage();

fixture('Login')
  .page('http://localhost:4200');

test('contains a login link to navigate to the login page', async t => {
  await t.click(navPage.navItemsLoggedOut.login).expect(loginPage.header.exists).ok();
});

test('returns to the previous page after login', async t => {
  await t
    .useRole(adminUser)
    .expect(homePage.header.exists).ok();
});

test('has a logout button after login', async t => {
  await t
    .useRole(adminUser)
    .expect(navPage.navItemsLoggedIn.logout.exists).ok()
    .click(navPage.navItemsLoggedIn.logout)
    .expect(navPage.navItemsLoggedIn.logout.exists).notOk();
});

test('wont stay in a private page after logout', async t => {
  await t
    .useRole(adminUser)
    .click(navPage.navItemsLoggedIn.bet)
    .expect(betPage.header.exists).ok()
    .click(navPage.navItemsLoggedIn.logout)
    .expect(betPage.header.exists).notOk();
});

test('contains a link for betting in the home page after login', async t => {
  await t
    .expect(homePage.betButton.exists).notOk()
    .useRole(adminUser)
    .expect(homePage.betButton.exists).ok();
});
