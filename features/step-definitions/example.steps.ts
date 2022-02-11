import { Given, Then, When } from "@cucumber/cucumber";

Given(/^I am on the practice page "(?:[^"]|"")*"$/, async function (url) {
    await browser.url(url)
    await browser.maximizeWindow()
    await browser.pause(2000)
})


Then(/^ I validate the page header "AUTOMATION PRACTICE ME" $/, async function (header) {
    const Header = await $('.post-title entry-title')
    expect(Header).toHaveTextContaining('Demo Sign-Up Selenium Automation Practice Form')
})

When(/^ I enter firstname (.+) and lastname (.+)$/, async function (fname, lname) {
    const Fname = await  $('input[name="firstname"]')
    const Lname = await $('input[name="lastname"]')

    await Fname.setValue(fname)
    await Lname.setValue(lname)

})

When(/^ I select gender (.+), years of experience (.+)$/, async function (gender, yrsexp) {
    const Gender = await $$('input[name="sex"]')
    const Exp = await $$('input[name="exp"]')

    for(let i=0; i<Gender.length; i++)
    {
        const element = await Gender[i].getAttribute('value')
        if(element == gender)
        {
            await Gender[i].click()
            break;
        }
    }

    
    for(let i=0; i<Exp.length; i++)
    {
        const element = await Exp[i].getAttribute('value')
        if(element == yrsexp)
        {
            await Exp[i].click()
            break;
        }
    }
})

When(/^ I select profession <[a-zA-Z]+> and automation tools <[a-zA-Z]+>$/, async function (profession, tools) {
    const Profession = await $('input[name="profession"]')
    const Tool = await $('input[name="tool"]')

    for(let i=0; i<Profession.length; i++)
    {
        const element = await Profession[i].getAttribute('value')
        if(element == profession)
        {
            await Profession[i].click()
            break;
        }
    }

    for(let i=0; i<Tool.length; i++)
    {
        const element = await Tool[i].getAttribute('value')
        if(element == tools)
        {
            await Tool[i].click()
            break;
        }
    }

})

When(/^ I select continent <[a-zA-Z]+>$/, async function (continent) {
    const Continent = await $('#continents')
    await Continent.selectByVisisbleText(continent)
})

When(/^ I select selenium command <[a-zA-Z]+>$/, async function (selcommand) {
    const Selcommand = await $('#selenium_commands')
    await Selcommand.selectByVisisbleText(selcommand)
})

When(/^ I click on button$/,async function () {
    const btn = await $('button[name="submit"]')
    await btn.click()
})


