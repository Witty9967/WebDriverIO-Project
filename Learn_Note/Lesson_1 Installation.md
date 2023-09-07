### Project Setup & WebdriverIO Installation

```sh
# Step 1 - Create now folder and opein in IDE(VS Code)

# Step 2 - Open terminal in VS Code and run commands
npm init -y
npm init wdio
# Step 3 - Select the options as required and install

# Step 4 - Check WebDriverIO version
npm ls webdriverio
# Step 5 - Check wdio.conf.js file and project floders are created

# Step 6 - Installing wdio package
npx wdio config --yes

# Step 7 - To run existing tests 

# Run all tests in the folder configured in wdio.conf.js  
npx wdio run wdio.conf.js
# or
npm run wdio

# Run specific tests 
npx wdio run wdio.conf.js --spec test1.js 
```

### How to create Tests

```javascript
// Step 1 - Create a new file under spec folder

// Step 2 - Add the test script using it block (mocha) 
describe('Demo Tests', () => {
    it('My 1st Test', async () => {
        await browser.url('https://google.com');
        // await browser.debug()
        await $('[name="q"]').addValue('WebdriverIO');
        await browser.keys('Enter')
        // await $('[name="btnK"]').waitForClickable();
        // await $('[name="btnK"]').click()
        await browser.pause(2000);
    })
 })

// $()  Single dollar sign to find a single web element
// $$()  Double dollar sign to find multiple web elements
```

### How to Generate and View Reports

```sh
# Step 1 Run 
npm install @wdio/allure-reporter --save-dev

```

```javascript
// Step 2  Add reporter config in wdio.conf.js
export const config = {
    // ...
    reporters: [['allure', {
        outputDir: 'allure-results',
    }]],
    // ...
}
```

```sh
# Step 3 - Run test and check Allure Results folder is generated

# Step 4 - Install allure command line tool  
sudo npm install -g allure-commandline --save-dev

# Step 5 - Run commands
# this will generate allure-report folder
allure generate allure-results 
# will start server and open report
allure open     
```



