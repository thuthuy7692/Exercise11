
import { test, expect } from '@playwright/test';
import { ProductDetail } from '../POM/productDetail';

test("ECOM-3:Verify product page hiển thị đúng với thông tin sản phẩm", async ({ page }) => {
    const productDetail = new ProductDetail(page);
    await productDetail.goto();
    await expect(productDetail.productTitle).toHaveText('FullStack Automation QA với Playwright Typescript');
    await expect(productDetail.regularPrice).toHaveText('Original price was: $100.00.');
    await expect(productDetail.salePrice).toHaveText('Current price is: $70.00.');
    await expect(productDetail.discription).toHaveText('Khoá học automation test từ chưa biết gì, với Playwright TypeScript');
    await expect(productDetail.addToCardButton).toBeEnabled();
    await productDetail.addToCard();
    await expect(productDetail.successMessage).toContainText('has been added to your cart.')


    await productDetail.openReviewTab();
    await expect(productDetail.noreviewText).toHaveText('There are no reviews yet.')
})
test("ECOM-4: Verify tính năng product review hoạt động đúng", async({page, browser}) => {
const productDetail = new ProductDetail(page);
await productDetail.goto();
await productDetail.openReviewTab();
await expect(productDetail.noreviewText).toHaveText('There are no reviews yet.')
await expect(productDetail.yourRating).toBeVisible();
await expect(productDetail.yourReview).toBeVisible();
await expect(productDetail.name).toBeVisible();
await expect(productDetail.email).toBeVisible();
await expect(productDetail.checkBox).toBeVisible();

//y 2: thuc hien review:
await productDetail.selectRating(5);
await expect(productDetail.yourRating.getByRole('radio',{name: '5 of 5 stars'})).toBeChecked();

await productDetail.fillReview('Khoá học chất lượng');
await expect(productDetail.yourReview).toHaveValue('Khoá học chất lượng');

await productDetail.fillName('thuylt');
await expect(productDetail.name).toHaveValue('thuylt');

const email = `thuylt0612${Date.now()}@gmail.com`;
await productDetail.fillEmail(email);
await expect(productDetail.email).toHaveValue(email);

await productDetail.checkBoxSave();
await expect(productDetail.checkBox).toBeChecked();

await productDetail.clickSubmit();
await expect(productDetail.successReview).toBeVisible();

//y 3: reload trinhf duyet: review van hien thi:
await productDetail.reload();
await productDetail.openReviewTab();
await expect(productDetail.successReview).toBeVisible();

//4. Mở 1 trình duyệt khác, Verify không nhìn thấy review:
const context2 = await browser.newContext();
const page2 = await context2.newPage()

const productDetail2 =new ProductDetail(page2)
await productDetail2.goto()
await productDetail2.openReviewTab();
await expect(productDetail2.successReview).not.toBeVisible();
await context2.close();

})

