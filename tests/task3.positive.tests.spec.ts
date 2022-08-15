import { expect, test } from '@playwright/test'
import { constants } from './constantsForOnliner/constantsForOnliner'
import { onlinerPage } from './pages/onlinerPage'
import { locatorsForOnliner } from './locatorsForOnliner/locatorsForOnliner'

test.describe('positive tests', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(constants.onlinerUrl)
    })
    test('positive test 1', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElement(locatorsForOnliner.searchInput)
        await resPage.typeText(
            locatorsForOnliner.searchInput,
            constants.autoSearch
        )
        await resPage.pressEnter()
        await expect(page).toHaveURL(constants.onlinerUrl)
    })

    test('positive test 2', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.inputButton)
        await resPage.findElement(locatorsForOnliner.autorizationButton)
        const textRes = await resPage.getText(locatorsForOnliner.regButton)
        await expect(textRes).toContain(constants.onlinerRes)
    })

    test('positive test 3', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.gameOnliner)
        await resPage.findElement(locatorsForOnliner.gameHeaderTitle)
        await expect(page).toHaveURL(constants.gameAdress)
    })

    test('positive test 4', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.findBuscet)
        const busketRes = await resPage.getText(locatorsForOnliner.busketCheck)
        await expect(busketRes).toContain(constants.checkPunkt)
    })

    test('positive test 5', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(
            locatorsForOnliner.catalogOnlinerLocator
        )
        await expect(page).toHaveURL(constants.catalogOnlinerPage)
    })

    test('positive test 6', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(
            locatorsForOnliner.companyLocatorFind
        )
        const companyRes = await resPage.getText(
            locatorsForOnliner.companyLocatorText
        )
        await expect(companyRes).toContain(constants.companyText)
    })

    test('positive test 7', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.currencyAmount)
        await expect(page).toHaveURL(constants.currencyPage)
    })
})
