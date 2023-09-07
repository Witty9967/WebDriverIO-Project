describe('Demo Tests', function(){
    it('My First Test', async () => {
        await browser.url('https://google.com');

        await $('[name="q"]').setValue('WebdriverIO');
        await $('[name="btnK"]').waitForClickable();
        await $('[name="btnK"]').click()

        browser.pause(2000)
    })
})
// describe('Demo Tests', function(){
//     it('My First Test', async () => {
//         await browser.url('https://www.baidu.com')
//         // browser.pause(2000)
//         await $('[id="kw"]').click()
//         await $('[id="kw"]').setValue('WebdriverIO')
//         // await $('[name="btnK"]').click()

//         browser.pause(2000)
//     })
// })