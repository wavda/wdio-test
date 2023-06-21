const Page = require('./page');

class LoginPage extends Page {
    get inputuserId() {
        return $('input[name="user[userId]"]');
    }

    get inputPassword() {
        return $('input[name="user[secret]"]');
    }

    get btnContinue() {
        return $('#tag-lg001');
    }

    async login(userId, password) {
        await this.waitForPageLoad();
        await this.inputuserId.setValue(userId);
        await this.btnContinue.click();
        await this.inputPassword.setValue(password);
        await this.btnContinue.click();
    }

    open() {
        return super.open(process.env.OAUTH_URL + '/login');
    }
}

module.exports = new LoginPage();
