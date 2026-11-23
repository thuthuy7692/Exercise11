// import { Page, Locator } from '@playwright/test';

// export class ProductDetail {
//     page: Page;
//     productTitle: Locator;
//     productImage: Locator;
//     regularPrice: Locator;
//     salePrice: Locator;
//     shortDescription: Locator;
//     addToCartButton: Locator;
//     successMessage: Locator;
//     reviewsTab: Locator;
//     noReviewsText: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.productTitle = this.page.locator('h1.product_title');
//         this.productImage = this.page.locator('.woocommerce-product-gallery__image img').first();
//         // Scope to .summary because related products below also render prices
//         this.regularPrice = this.page.locator('.summary p.price del .woocommerce-Price-amount');
//         this.salePrice = this.page.locator('.summary p.price ins .woocommerce-Price-amount');
//         this.shortDescription = this.page.locator('.woocommerce-product-details__short-description');
//         this.addToCartButton = this.page.locator('button[name="add-to-cart"]');
//         this.successMessage = this.page.locator('.woocommerce-message');
//         this.reviewsTab = this.page.locator('#tab-title-reviews a');
//         this.noReviewsText = this.page.locator('.woocommerce-noreviews');
//     }

//     async addToCart() {
//         await this.addToCartButton.click();
//     }

//     async openReviewsTab() {
//         await this.reviewsTab.click();
//     }
// }

import { Page, Locator } from '@playwright/test';

export class ProductDetail {
    page: Page;
    productTitle: Locator;
    productImage: Locator;
    regularPrice: Locator;
    salePrice: Locator;
    discription: Locator;
    addToCardButton: Locator;
    successMessage: Locator;
    reviewTab: Locator;
    noreviewText: Locator;

    yourRating: Locator;
    yourReview: Locator;
    name: Locator;
    email: Locator;
    checkBox: Locator;
    submit: Locator;
    successReview: Locator;



    constructor(page: Page) {
        this.page = page;
        this.productTitle = this.page.locator('h1.product_title')
        this.productImage = this.page.getByAltText('FullStack Automation QA với Playwright Typescript')
        this.regularPrice = this.page.locator('.summary').getByText('Original price was: $100.00.')
        this.salePrice = this.page.locator('.summary').getByText('Current price is: $70.00.');
        this.discription = this.page.locator('.woocommerce-product-details__short-description').getByText('Khoá học automation test từ chưa biết gì, với Playwright TypeScript');
        this.addToCardButton = this.page.locator('.botiga-single-addtocart-wrapper').getByRole('button', { name: 'Add to cart' });
        this.successMessage = this.page.getByText('“FullStack Automation QA với Playwright Typescript” has been added to your cart.');
        this.reviewTab = this.page.getByRole('tab', { name: 'Reviews' });
        this.noreviewText = this.page.locator('.woocommerce-noreviews').getByText('There are no reviews yet.');

        this.yourRating = this.page.getByRole('group', { name: 'Your rating' });
        this.yourReview = this.page.getByLabel('your review')
        this.name = this.page.getByRole('textbox', { name: 'Name' });
        this.email = this.page.getByRole('textbox', { name: 'Email' });
        this.checkBox = this.page.getByRole('checkbox', { name: 'Save my name, email, and website in this browser for the next time I comment' });
        this.submit = this.page.getByRole('button', { name: 'Submit' });
        this.successReview = this.page.getByText('Your review is awaiting approval');
    }
    async goto() {
        await this.page.goto('https://e-commerce-dev.hoctest.com/product/fullstack-automation-qa-voi-playwright-typescript/');
    }


    async addToCard() {
        await this.addToCardButton.click();
    }

    async openReviewTab() {
        await this.reviewTab.click();
    }

    async selectRating(star: number) {
        await this.yourRating.getByRole('radio', { name: `${star} of 5 stars` }).click();
    }

    async fillReview(review: string) {
        await this.yourReview.fill(review);
    }

    async fillName(name: string) {
        await this.name.fill(name);
    }

    async fillEmail(email: string) {
        await this.email.fill(email);
    }
    async checkBoxSave() {
        await this.checkBox.check();
    }

    async clickSubmit(){
        await this.submit.click();
    }
 async reload(){
    await this.page.reload()
 }







}