import { Page, Locator } from '@playwright/test';


export class HomePage {
    page: Page;
    searchIcon: Locator;
    searchInput: Locator;
    shopMenu: Locator;
    blogMenu: Locator;
    chungchiMenu: Locator;
    playwrightMenu: Locator;
    congcuMenu: Locator;
    myaccMenu: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchIcon =this.page.getByTitle("Search for a product").first();
        this.searchInput= this.page.getByPlaceholder("Search products…").first();
        this.shopMenu = this.page.locator('//nav[@id="site-navigation"]//a[@href="https://e-commerce-dev.hoctest.com/"]');
        this.blogMenu = this.page.locator('//nav[@id="site-navigation"]//a[@href="https://e-commerce-dev.hoctest.com/blog/"]');
        this.chungchiMenu = this.page.locator('//nav[@id="site-navigation"]//a[@href="https://e-commerce-dev.hoctest.com/product-category/chung-chi/"]');
        this.playwrightMenu = this.page.locator('//nav[@id="site-navigation"]//a[@href="https://e-commerce-dev.hoctest.com/product-category/playwright/"]');
        this.congcuMenu = this.page.locator('//nav[@id="site-navigation"]//a[@href="https://e-commerce-dev.hoctest.com/product-category/cong-cu/"]');
        this.myaccMenu = this.page.locator('//nav[@id="site-navigation"]//a[@href="https://e-commerce-dev.hoctest.com/my-account/"]');
    }

    async goto() {
        await this.page.goto('https://e-commerce-dev.hoctest.com')
    }

    async searchClick(){
        await this.searchIcon.click();
    }

    async fillSearch(keyword:string){
        await this.searchInput.fill(keyword);
    }

    async submitSearch(){
        await this.searchInput.press('Enter');
    }

    async openProduct(productName: string){
        await this.page.locator('ul.products li.product')
            .filter({ hasText: productName })
            .locator('.woocommerce-loop-product__title')
            .click();
    }

    
}