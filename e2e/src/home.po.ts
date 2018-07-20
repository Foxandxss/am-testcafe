import { Selector } from 'testcafe';

export class HomePage {
  header = Selector('app-home h1');
  betButton = Selector('button').withText('Start betting');
}
