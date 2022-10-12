const Page = require('../Page');

class SignupPage extends Page {

    get inputFirstName() {
        return $('//input[@placeholder="firstname"]');
    }

    get inputLastName() {
        return $('//input[@placeholder="lastname"]');
    }

    get inputUsername() {
        return $('//input[@placeholder="username"]');
    }

    get inputEmail() {
        return $('//input[@placeholder="email"]');
    }

    get inputPassword() {
        return $('//input[@placeholder="password"]');
    }

    get inputConfirmPassword() {
        return $('//input[@placeholder="confirm"]');
    }

    get btnSignUp() {
        return $('//button[normalize-space()="Sign Up"]');
    }

    get linkSignInInstead() {
        return $('//span[@class="pointer"]');
    }

    // get editMessage() {
    //     return $('');
    // }
    async signup(firstname, lastname, username, email, password, confirm) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirm);
        await this.btnSignUp.click();
    }

    open() {
        return super.open('/');
    }
}
module.exports = new SignupPage();
