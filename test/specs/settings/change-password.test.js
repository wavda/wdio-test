const LoginPage = require('../../pageobjects/login.page')
const Navbar = require('../../pageobjects/navbar.page')
const SettingsPage = require('../../pageobjects/settings/settings.page')
const ChangePasswordPage = require('../../pageobjects/settings/change-password.page')

describe('Two Factor Authentication', () => {
    before(async() => {
        await LoginPage.open();
        await LoginPage.login('WAZ123', 'mypassword');
    })

    beforeEach(async() => {
        await Navbar.openSettingsPage();
        await SettingsPage.openChangePasswordPage();
    })

    it('should change two factor authentication method from SMS to email', async () => {
        await ChangePasswordPage.verifyCurrentOtpMethod('SMS');
        await ChangePasswordPage.selectOtpMethod('Email');
        await expect(ChangePasswordPage.changeOtpSuccessPopup).toBeExisting();
        await ChangePasswordPage.verifyCurrentOtpMethod('Email');
    });
})
