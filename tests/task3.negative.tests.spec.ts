import { expect, test } from '@playwright/test'
import { constants } from './constantsForOnliner/constantsForOnliner'
import { onlinerPage } from './pages/onlinerPage'
import { locatorsForOnliner } from './locatorsForOnliner/locatorsForOnliner'

test.describe('negative tests', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(constants.ONLINER_URL)
    })
    test('negative test 1', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElement(locatorsForOnliner.searchInput)
        await RES_PAGE.typeText(
            locatorsForOnliner.searchInput,
            constants.NEGATIVE_AUTOSEARCH
        )
        await RES_PAGE.pressEnter()
        await page.goto(constants.GAME_ADRESS)
        await expect(page).not.toHaveURL(constants.ONLINER_URL)
    })

    test('negative test 2', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(locatorsForOnliner.inputButton)
        await RES_PAGE.findElement(locatorsForOnliner.autorizationButton)
        const textRes = await RES_PAGE.getText(locatorsForOnliner.regButton)
        await expect(textRes).not.toContain(constants.ONLINER_RES1)
    })

    test('negative test 3', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(locatorsForOnliner.gameOnliner)
        await RES_PAGE.findElement(locatorsForOnliner.gameHeaderTitle)
        await expect(page).not.toHaveURL(constants.GAME_ADRESS)
    })

    test('negative test 4', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(locatorsForOnliner.findBuscet)
        const BUSKET_RES = await RES_PAGE.getText(
            locatorsForOnliner.busketCheck
        )
        await expect(BUSKET_RES).not.toContain(constants.CHECK_PUNKT)
    })

    test('negative test 5', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(
            locatorsForOnliner.catalogOnlinerLocator
        )
        await expect(page).not.toHaveURL(constants.CATALOG_ONLINER_PAGE)
    })

    test('negative test 6', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(
            locatorsForOnliner.companyLocatorFind
        )
        const COMPANY_RES = await RES_PAGE.getText(
            locatorsForOnliner.companyLocatorText
        )
        await expect(COMPANY_RES).not.toContain(constants.COMPANY_TEXT)
    })

    test('negative test 7', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(
            locatorsForOnliner.currencyAmount
        )
        await expect(page).not.toHaveURL(constants.CURRENCY_PAGE)
    })
})
