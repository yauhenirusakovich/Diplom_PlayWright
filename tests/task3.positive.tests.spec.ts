import { expect, test } from '@playwright/test'
import { constants } from './constantsForOnliner/constantsForOnliner'
import { onlinerPage } from './pages/onlinerPage'
import { locatorsForOnliner } from './locatorsForOnliner/locatorsForOnliner'

test.describe('positive tests', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(constants.ONLINER_URL)
    })
    test('positive test 1', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElement(locatorsForOnliner.searchInput)
        await RES_PAGE.typeText(
            locatorsForOnliner.searchInput,
            constants.AUTO_SEARCH
        )
        await RES_PAGE.pressEnter()
        await expect(page).toHaveURL(constants.ONLINER_URL)
    })

    test('positive test 2', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(locatorsForOnliner.inputButton)
        await RES_PAGE.findElement(locatorsForOnliner.autorizationButton)
        const TEXT_RES = await RES_PAGE.getText(locatorsForOnliner.regButton)
        await expect(TEXT_RES).toContain(constants.ONLINER_RES)
    })

    test('positive test 3', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(locatorsForOnliner.gameOnliner)
        await RES_PAGE.findElement(locatorsForOnliner.gameHeaderTitle)
        await expect(page).toHaveURL(constants.GAME_ADRESS)
    })

    test('positive test 4', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(locatorsForOnliner.findBuscet)
        const BUSCET_RES = await RES_PAGE.getText(
            locatorsForOnliner.busketCheck
        )
        await expect(BUSCET_RES).toContain(constants.CHECK_PUNKT)
    })

    test('positive test 5', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(
            locatorsForOnliner.catalogOnlinerLocator
        )
        await expect(page).toHaveURL(constants.CATALOG_ONLIBER_PAGE)
    })

    test('positive test 6', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(
            locatorsForOnliner.companyLocatorFind
        )
        const COMPANY_RES = await RES_PAGE.getText(
            locatorsForOnliner.companyLocatorText
        )
        await expect(COMPANY_RES).toContain(constants.COMPANY_TEXT)
    })

    test('positive test 7', async ({ page }) => {
        const RES_PAGE = new onlinerPage(page)
        await RES_PAGE.findElementClickAndWait(
            locatorsForOnliner.currencyAmount
        )
        await expect(page).toHaveURL(constants.CURRENCY_PAGE)
    })
})
