### How to implement Page Object Model

Step 1 - Create a class for each page

Step 2 - Create locators of all objects to be used in that page

Step 3 - Create methods or actions to be performed on the objects

```javascript
class LoginPage {
    get usernameTextbox() {
        return $('#username')
    }
    get passwordTextbox() {
        return $('#password')
    }
    get loginButton() {
        return $('button[type="submit"]')
    }
    get loginMessage() {
        return $('#flash')
    }
    
    async login(username,password){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()
    }
    async checkMessage(msg){
        await expect(this.loginMessage).toHaveTextContaining(msg)
    }
}   
module.exports = new LoginPage();
```

Step 4 - Refer in the test scripts

```javascript
const LoginPage = require('../pages/login.page.js')

describe('Demo Tests', () => { 
    it('Login Test', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')
    })
})
```

Step 5 - Run and validate

### ES模块和CommonJS模块差异

ES 模块：ES 模块使用 import 和 export 语句来导入和导出模块。例如，使用 import moduleName from 'module' 来导入模块，使用 export 关键字来导出变量、函数或类。

```javascript
// 导入模块
import moduleName from 'module';

// 导出变量
export const myVar = 42;
```

CommonJS 模块：CommonJS 模块使用 require 函数来导入模块，并使用 module.exports 或 exports 对象来导出模块。

```javascript
// 导入模块
const moduleName = require('module');

// 导出变量
module.exports.myVar = 42;

```
