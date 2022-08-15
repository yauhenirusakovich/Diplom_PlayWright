import { expect, test } from '@playwright/test'
import { constants } from './constantsForOnliner/constantsForOnliner'
import { onlinerPage } from './pages/onlinerPage'
import { locatorsForOnliner } from './locatorsForOnliner/locatorsForOnliner'

test.describe('negative tests', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(constants.onlinerUrl)
    })
    test('negative test 1', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElement(locatorsForOnliner.searchInput)
        await resPage.typeText(
            locatorsForOnliner.searchInput,
            constants.autoSearch
        )
        await resPage.pressEnter()
        await expect(page).toHaveURL(constants.negativeOnlinerUrl)
    })

    test('negative test 2', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.inputButton)
        await resPage.findElement(locatorsForOnliner.autorizationButton)
        const textRes = await resPage.getText(locatorsForOnliner.regButton)
        await expect(textRes).toContain(constants.negativeOnlinerRes)
    })

    test('negative test 3', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.gameOnliner)
        await resPage.findElement(locatorsForOnliner.gameHeaderTitle)
        await expect(page).toHaveURL(constants.negativeGameAdress)
    })

    test('negative test 4', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.findBuscet)
        const busketRes = await resPage.getText(locatorsForOnliner.busketCheck)
        await expect(busketRes).toContain(constants.negativeCheckPunkt)
    })

    test('negative test 5', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(
            locatorsForOnliner.catalogOnlinerLocator
        )
        await expect(page).toHaveURL(constants.negativeCatalogOnlinerPage)
    })

    test('negative test 6', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(
            locatorsForOnliner.companyLocatorFind
        )
        const companyRes = await resPage.getText(
            locatorsForOnliner.companyLocatorText
        )
        await expect(companyRes).toContain(constants.negativeCompanyText)
    })

    test('negative test 7', async ({ page }) => {
        const resPage = new onlinerPage(page)
        await resPage.findElementClickAndWait(locatorsForOnliner.currencyAmount)
        await expect(page).toHaveURL(constants.negativeCurrencyPage)
    })
})
