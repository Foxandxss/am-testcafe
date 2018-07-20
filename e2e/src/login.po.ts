import { Role, Selector } from 'testcafe';

export class LoginPage {
  header = Selector('app-login h2');
  inputEmail = Selector('app-login #inputEmail');
  inputPassword = Selector('app-login #inputPassword');
  submitButton = Selector('button');
}

const login = new LoginPage();

export const adminUser = Role('http://localhost:4200/login', async t => {
  await t
    .typeText(login.inputEmail, 'jesus@perro.com')
    .typeText(login.inputPassword, '1234')
    .click(login.submitButton);
}, { preserveUrl: true });
