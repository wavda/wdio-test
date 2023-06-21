const Page = require('../page');

class Settings extends Page {
    get subMenuSecurity() {
        return $('//*[@class="submenu-item__body" and contains(text(),"Security")]');
    }

    async openChangePasswordPage() {
        await this.waitForPageLoad();
        await this.subMenuSecurity.click();
    }
}

module.exports = new Settings();
