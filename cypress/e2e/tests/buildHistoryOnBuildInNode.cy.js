/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import nodePageData from "../../fixtures/pom_fixtures/nodePage.json";
import buildHistoryOnBuildInNodePageData from "../../fixtures/pom_fixtures/buildHistoryOnBuildInNodePage.json";

describe('buildHistoryOnBuildInNode', () => {

    const homePage = new HomePage();

    it('AT_11.04.01 | Build Executor Status > Verify possibility to get to the "Build History on Build-In Node" page from the Build-In Node page through left side panel', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuildInNodeName(nodePageData.nodeBuiltInName)
            .clickBuildHistoryLink()
            .getPageHeader().should('have.text', buildHistoryOnBuildInNodePageData.pageHeader)
    });
});
