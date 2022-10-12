const Page = require('../Page');


class LoginPage extends Page {

    get inputEmail() {
        return $('//input[@placeholder="email"]');
    }

    get inputPassword() {
        return $('//input[@placeholder="password"]');
    }

    get btnLogin() {
        return $('button[type="submit"]');
    }

    get linkSignupInstead() {
        return $('//span[@class="pointer"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }


    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();
