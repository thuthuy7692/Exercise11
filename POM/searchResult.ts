import { Page, Locator } from '@playwright/test';


export class SearchResultPage {
    page: Page;
    resultCount: Locator;
    productTitles: Locator;


    constructor(page: Page) {
        this.page = page;
        this.resultCount = this.page.locator('.woocommerce-result-count');
        this.productTitles = this.page.locator('ul.products li.product .woocommerce-loop-product__title');
    }
}
