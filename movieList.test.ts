import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
});

afterAll(async () => {
    await driver.quit();
})

test('I can use the Movie List', async () => {
    let inputField = driver.findElement(By.xpath('//form//input'));
    await inputField.sendKeys('Back to the Future');
    
    let addButton = driver.findElement(By.xpath('//form//button'));
    await addButton.click();

    await driver.findElement(By.xpath('//form//input')).sendKeys('Star Wars\n');

    await driver.findElement(By.xpath('//form//input')).sendKeys('Terminator\n');

    await driver.sleep(2000);

    let watchButton = driver.findElement(By.xpath('//ul//li//span'));
    await watchButton.click();

    let message = driver.findElement(By.id("message")).getText();
    if(await message == 'Back to the Future watched!'){
        console.log('Message is correct.')
    }else {
        console.log('Message is incorrect.')
    }

    await driver.sleep(2000);

    let removeButton = driver.findElement(By.id("StarWars"));
    await removeButton.click();

    await driver.sleep(2000);
});