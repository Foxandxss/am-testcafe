import { Selector } from 'testcafe';

export class MoneyPage {
  header = Selector('app-addmoney h1');
  cashButton = Selector('button').withText('Give me money');
}
