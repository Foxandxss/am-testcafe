import { HomePage } from './home.po';
import { LoginPage, adminUser } from './login.po';
import { NavPage } from './nav.po';
import { BetPage } from './bet.po';
import { MoneyPage } from './money.po';

const homePage = new HomePage();
const loginPage = new LoginPage();
const navPage = new NavPage();
const betPage = new BetPage();
const moneyPage = new MoneyPage();

fixture('Betting')
  .page('http://localhost:4200');

  test('shouldnt navigate to bet if we are not logged in', async t => {
    await t
      .click(navPage.navItemsLoggedIn.bet)
      .expect(loginPage.header.exists).ok();
  });


fixture('Betting logged in')
  .page('http://localhost:4200')
  .beforeEach(async t => {
    await t.useRole(adminUser).click(navPage.navItemsLoggedIn.bet);
  });

  test('should navigater to bet if we are logged in', async t => {
    await t.expect(betPage.header.exists).ok();
  });

  test('without cash redirectos to add money page', async t => {
    await t
      .expect(navPage.navItemsLoggedIn.cash.textContent).contains(0)
      .click(betPage.betButtons.nth(0))
      .expect(moneyPage.header.exists).ok();
  });

fixture('Betting logged in with cash')
  .page('http://localhost:4200')
  .beforeEach(async t => {
    await t
      .useRole(adminUser)
      .click(navPage.navItemsLoggedIn.addmoney)
      .click(moneyPage.cashButton)
      .click(navPage.navItemsLoggedIn.bet);
  });

  test('can place bets with money', async t => {
    await t
      .click(betPage.betButtons.nth(0))
      .expect(betPage.header.exists).ok()
      .expect(navPage.navItemsLoggedIn.cash.textContent).contains(0);
    });

  test('disables a button after betting', async t => {
    await t
      .click(betPage.betButtons.nth(0))
      .expect(betPage.betButtons.nth(0).getAttribute('disabled')).eql('');
  });
