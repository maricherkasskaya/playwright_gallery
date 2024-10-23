import { MainPage, PopupSearch, ResultPage } from './index';

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page);
        this.popupSearch = new PopupSearch(page);
        this.resultPage = new ResultPage(page);
}
};
