// const chai = require('chai');
// const assert = chai.assert;
// const expect = chai.expect;
// const should = chai.should();
const LoginPage = require('../pageobjects/auth/Login.page');

describe('My Login application', () => {
    before('Log in', async () => {
    await browser.maximizeWindow();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login('anna.mia@admin.com', '123456');
    });
    //
    // it('Should reset form on login page', async () => {
    //     await LoginPage.open();
    //     await LoginPage.inputEmail.setValue(process.env.USER_EMAIL);
    //     await LoginPage.inputPassword.setValue(process.env.USER_PASSWORD);
    //     await browser.refresh();
    //
    //     await expect(await LoginPage.inputEmail).toHaveText('');
    //     await expect(await LoginPage.inputPassword).toHaveText('');
    // });
    // it('Should have the all the fields on Login page as per requirement', async () => {
    //     await LoginPage.open();
    //
    //     await expect(LoginPage.pageTitle).toBeExisting();
    //     await expect(LoginPage.inputEmail).toBeExisting();
    //     await expect(LoginPage.inputPassword).toBeExisting();
    //     await expect(LoginPage.btnSubmit).toBeExisting();
    //     await expect(LoginPage.linkSignup).toBeExisting();
    //     await expect(LoginPage.linkRestorePassword).toBeExisting();
    // });
    //
    // it('Should stays logged in after re-opening tab', async () => {
    //     await LoginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    //
    //     await browser.newWindow('https://webdriver.io', {
    //         windowName: 'WebdriverIO window',
    //         windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    //     })
    //
    //     const newTitle = 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js';
    //     browser.waitUntil(async () => {
    //         const pageTitle = await browser.getTitle();
    //         return pageTitle == newTitle;
    //     });
    //
    //     const handles = await browser.getWindowHandles();
    //     await browser.switchToWindow(handles[0]);
    //     await browser.closeWindow();
    //     await browser.switchToWindow(handles[1]);
    //
    //     await LoginPage.open();
    //
    //     await expect(PublicationsPage.navBar.pageTitle).toBeExisting();
    //     await expect(PublicationsPage.navBar.pageTitle).toHaveText(expected.publications.pageTitle);
    // });
    //
    // afterEach(function () {
    //     browser.execute(function () {
    //         window.localStorage.clear();
    //     });
    // });
});





