import { Selector } from 'testcafe';

export class BetPage {
  header = Selector('app-bet h1');
  betButtons = Selector('button').withText('Bet');
}
