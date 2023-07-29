/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import nodeConfigurePageData from '../../fixtures/pom_fixtures/nodeConfigurePage.json';
import NodeConfigurePage from "../../pageObjects/NodeConfigurePage";

describe('Build Executor Status > Agent (Node) > Configure', () => {
    const homePage = new HomePage();
    const nodeConfigurePage = new NodeConfigurePage();

    it('AT 11.03.01 | Clicking Gear Icon on NodesPage navigates to the Node Configure page', () => {
        homePage.clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .getNodePropertiesTitle()
            .then((actualText) => {
                expect(actualText).to.equal(nodeConfigurePageData.nodePropertiesSectionTitle);
            });
        nodeConfigurePage
            .getNodeConfigurePageUrl()
            .should('include', nodeConfigurePageData.nodeConfigurePageUrl);
    });
})