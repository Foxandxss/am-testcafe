import { Selector } from 'testcafe';

export class NavPage {
  private navItems = Selector('.nav-item');

  navItemsLoggedOut;

  navItemsLoggedIn;

  constructor() {
    this.navItemsLoggedOut = {
      home: this.navItems.nth(0),
      bet: this.navItems.nth(1),
      login: this.navItems.nth(2)
    };

    this.navItemsLoggedIn = {
      home: this.navItems.nth(0),
      bet: this.navItems.nth(1),
      addmoney: this.navItems.nth(2),
      logout: this.navItems.nth(3),
      cash: this.navItems.nth(4)
    };
  }
}
