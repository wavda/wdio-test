# Tools
JavaScript, WebdriverIO, Allure

# Test Setup & Execution Steps
1. Copy file `.example.env` and rename it to `.env`
2. Fill test data in OAUTH_URL, USER_ID, and PASSWORD in `.env` file
3. Open terminal in your device
4. Install dependencies by running command `npm install`
5. Run test using command `npm test`
6. Generate test report using command `npm run generate-report`
7. An HTML report will be generated within "allure-report" and "allure-results" using Allure
8. The report will then automatically opened in your browser 
