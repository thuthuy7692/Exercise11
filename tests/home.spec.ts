import {test, expect} from '@playwright/test';
import { HomePage } from '../POM/home';
import { SearchResultPage } from '../POM/searchResult';

test('ECOM-1: Kiểm tra homepage hiển thị thành công', async({page})=>{
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle('E-Commerce (DEV) – Khoá học QA & Testing');

    await homePage.searchClick();
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.searchInput).toHaveAttribute('placeholder','Search products…');

    await expect(homePage.shopMenu).toBeVisible();
    await expect(homePage.shopMenu).toHaveText('Shop');

    await expect(homePage.blogMenu).toBeVisible();
    await expect(homePage.blogMenu).toHaveText('Blog');

    await expect(homePage.chungchiMenu).toBeVisible();
    await expect(homePage.chungchiMenu).toHaveText('Chứng chỉ');

    await expect(homePage.playwrightMenu).toBeVisible();
    await expect(homePage.playwrightMenu).toHaveText('Playwright');

    await expect(homePage.congcuMenu).toBeVisible();
    await expect(homePage.congcuMenu).toHaveText('Công cụ');

    await expect(homePage.myaccMenu).toBeVisible();
    await expect(homePage.myaccMenu).toHaveText('My Account');

})
test('ECOM-2: Kiểm tra tính năng search hoạt động đúng', async({page})=>{
const homePage =new HomePage(page);
await homePage.goto();
await homePage.searchClick();

await homePage.fillSearch("ISTQB");
await homePage.submitSearch();


const searchResult = new SearchResultPage(page)
//Tong ket qua bang 6:
await expect(searchResult.productTitles).toHaveCount(6);
//hien thi text "Showing all X results" 
await expect(searchResult.resultCount).toHaveText('Showing all 6 results');

//Tat ca ket qua deu chua tu ISTQB
const titles = await searchResult.productTitles.allInnerTexts();
for(const title of titles){
    expect(title).toContain('ISTQB');
}
})