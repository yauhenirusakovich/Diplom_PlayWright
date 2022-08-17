import { Page } from '@playwright/test'
import { constants } from '../constantsForOnliner/constantsForOnliner'

export class onlinerPage {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async findElementClickAndWait(locator: string) {
        await setTimeout(() => {
            this.page.locator(locator).click()
        }, 5000)
    }

    async findElement(locator: string) {
        await this.page.locator(locator)
    }

    async typeText(selector: string, text: string) {
        await this.page.type(selector, text, { delay: 50 })
    }

    async pressEnter() {
        await this.page.keyboard.press(constants.PRESS_ENTER)
    }

    async getText(locator: string) {
        return this.page.innerText(locator)
    }
}
