module.exports = class Page {
    open(path) {
        browser.maximizeWindow();
        return browser.url(`${path}`)
    }

    async waitForUrlContains(value, timeout = 30000) {
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes(value);
        }, { timeout, timeoutMsg: `Page URL did not contain '${value}' within the specified timeout.` });
    };

    async waitForPageLoad(timeout = 30000) {
        await browser.waitUntil(async () => {
            const readyState = await browser.execute(() => document.readyState);
            return readyState === 'complete';
        }, { timeout, timeoutMsg: 'Page did not finish loading within the specified timeout.' });
    };
}
