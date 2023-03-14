const Page = require('./page');

class DashboardPage extends Page {
    get navbarUserProfile () {
        return $('#v-step-3');
    }

    get navbarUserProfileSettings () {
        return $('a[href="/settings/personal-information"]');
    }

    async openSettingsPage () {
        await this.navbarUserProfile.isClickable();
        await this.navbarUserProfile.click();
        await this.navbarUserProfileSettings.click();
    }
}

module.exports = new DashboardPage();
