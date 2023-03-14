module.exports = class Page {
    open (path) {
        browser.setWindowSize(1936, 1048);
        return browser.url(`https://oauth.myapp.id/${path}`)
    }
}
