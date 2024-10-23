import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    constructor (page) {
        super (page);
        this.searchButton = this.page.getByLabel('Поиск');
        this.searchBox = this.page.getByPlaceholder('Что вы ищете?');
        this.searchBoxButton = this.page.locator('form').getByLabel('Поиск');
        
    }

    //Переход к поиску в header
    async goToSearch () {
        await this.searchButton.click();
    }

    //Заполнение поля поиска
    async fillSearchBox (searchData) {
        await allure.step ("Поиск через Главную страницу", async () => {
        await this.searchBox.click();
        await this.searchBox.fill(searchData);
        await this.searchBoxButton.click()
              });
    }
}
