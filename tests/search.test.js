import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { App } from '../src/pages';



const url  = ('/');
let app;

test('Пользователь может воспользоваться повторным поиском', async ({ page }) => {
  await allure.tags ("UI", "search");
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToSearch();
  await app.popupSearch.fillAndSearch('пушкин');
  
  //Проверяем включение поиского запроса "Пушкин" в заголовки статьи 
  await allure.step ("Поисковый запрос 'Пушкин' включен в заголовок статьи", async () => {
    await expect (app.resultPage.articleResult.nth(0)).toHaveText(/.*?Пушкин.*/);
  });
  

  //Проверяем включение поиского запроса "Пушкин" в плейсхолдер строки поиска
  await allure.step ("Поисковый запрос 'Пушкин' включен в плейсхолдер строки поиска", async () => {
    await expect (app.resultPage.searchResult).toHaveValue('пушкин');
  });
  
  
  //Проверяем включение поиского запроса "Пушкин" в строку url
  await allure.step ("Поисковый запрос 'Пушкин' включен в в строку url", async () => {
    await expect (app.resultPage.getCurrentUrl()).toContain('query=%D0%BF%D1%83%D1%88%D0%BA%D0%B8%D0%BD')
  });

  

  // 'Пользователь может ввести новый поиск через строку поиска'
  await app.mainPage.fillSearchBox('италия'); 

  //Проверяем включение поиского запроса "Италия" в заголовки статьи 
  await allure.step ("Поисковый запрос 'Италия' включен в заголовок статьи", async () => {
    await expect (app.resultPage.articleResult.nth(0)).toHaveText(/.*?Италия.*/);
  });


  //Проверяем включение поиского запроса "Италия" в плейсхолдер строки поиска
  await allure.step ("Поисковый запрос 'Италия' включен в плейсхолдер строки поиска", async () => {
    await expect (app.resultPage.searchResult).toHaveValue('италия');
  });

  
  //Проверяем включение поиского запроса "Италия" в строку url
  await allure.step ("Поисковый запрос 'Италия' включен в в строку url", async () => {
    await expect (app.resultPage.getCurrentUrl()).toContain('query=%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D1%8F')
  });

});
