const Page = require('../pageobjects/Page');
const LoginPage = require('../pageobjects/auth/Login.page');
const SignupPage = require('../pageobjects/auth/Signup.page');
const ProfilePage = require('../pageobjects/Profile.page');

describe('SIGNUP PAGE', () => {

    it('Should signup with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.linkSignupInstead.click();
        await SignupPage.signup("anna","Mia", "AnnaMia0306", "anna.mia@admin.com", "123456","123456");
        await expect(ProfilePage.editProfile).toHaveText("Edit Profile");
    });

    xit('Should not signup with the same credentials', async () => {
        await LoginPage.open();
        await LoginPage.linkSignupInstead.click();
        await SignupPage.signup("anna","Mia", "AnnaMia0306", "anna.mia@admin.com", "123456","123456");
        await expect(ProfilePage.errorMessage).toHaveText("User name have already been taken");
    });
});


// await SignupPage.signup(`user${Date.now()}@user.com`, 'superUser123!');
// await expect(ProfilePage.adminName).toHaveText("AnnaMia0306");