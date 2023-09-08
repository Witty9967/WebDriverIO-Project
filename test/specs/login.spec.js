const LoginPage = require('../pages/login.page.js')

// describe('Login page', () => {
//     it('Login Test',async ()=>{
//        await browser.url('https://the-internet.herokuapp.com/login') 
//        await $('#username').setValue('tomsmith')
//        await $('#password').setValue('SuperSecretPassword!')
//        await $('button[type="submit"]').click()
//     //    await $('#flash').getText()
//        await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
//     })
// })
describe('Demo Tests', () => {
    
    it('Login Test', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')
    })
})