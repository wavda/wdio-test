const Page = require('../page');

class ChangePassword extends Page {
    get dropdownOtp () {
        return $('#v-security-0__BV_toggle_');
    }

    dropdownOtpItem(otpMethod) {
        return $('//*[@class="dropdown-item" and contains(text(),"'+otpMethod+'")]');
    }

    get changeOtpSuccessPopup() {
        return $('//*[text()="OTP Method Changed"]');
    }
    
    async verifyCurrentOtpMethod(otpMethod) {
        await this.dropdownOtp.click();
        if(await this.dropdownOtpItem(otpMethod).isClickable()) {
            await this.dropdownOtpItem(otpMethod).click();
        } else {
            browser.refresh();
        }
    }

    async selectOtpMethod(otpMethod) {
        await this.dropdownOtp.click();
        await this.dropdownOtpItem(otpMethod).click();
    }
}

module.exports = new ChangePassword();
