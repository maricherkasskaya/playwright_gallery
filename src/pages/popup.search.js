import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";



export class PopupSearch extends BasePage {
    constructor (page) {
        super (page);
        this.searchField = this.page.getByPlaceholder('Что вы ищете?')
        this.searchPopupButton = this.page.locator('.popup-search button[aria-label="Поиск"]')

    }
    
    //Заполнение строки поиска и ввод
    async fillAndSearch (searchData) {
        await allure.step ("Поиск через Popup", async () => {
            await this.searchField.fill(searchData); //toDo вынести данные поиска в переменную
            await this.searchPopupButton.click();
              });
    }
    

}

