/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import NodeConfigurePage from "../../pageObjects/NodeConfigurePage";
import nodeConfigurePageData from '../../fixtures/pom_fixtures/nodeConfigurePage.json';
import nodePageData from "../../fixtures/pom_fixtures/nodePage.json";

describe('Build Executor Status > Agent (Node) > Configure', () => {
    const homePage = new HomePage();
    const nodeConfigurePage = new NodeConfigurePage();

    it('AT 11.03.01 | Clicking Gear Icon on NodesPage navigates to the Node Configure page', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .getNodePropertiesTitle()
            .then((actualText) => {
                expect(actualText).to.equal(nodeConfigurePageData.nodePropertiesSectionTitle);
            });
        nodeConfigurePage
            .getNodeConfigurePageUrl()
            .should('include', nodeConfigurePageData.nodeConfigurePageUrl);
    });

    it('AT 11.03.02 | Clicking Configure dropdown on NodesPage navigates to the Node Configure page', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .hoverAndClickNodeDrpDwn(nodePageData.nodeBuiltInName)
            .selectConfigNodeDrpDwnMenuBtn(nodePageData.nodeBuiltInName)
            .getNodePropertiesTitle()
            .then((actualText) => {
                expect(actualText).to.equal(nodeConfigurePageData.nodePropertiesSectionTitle);
            });
        nodeConfigurePage
            .getNodeConfigurePageUrl()
            .should('include', nodeConfigurePageData.nodeConfigurePageUrl);
    });

    it('AT 11.03.03 | Clicking Configure side menu on NodeStatusPage navigates to the NodeConfigure page', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuildInNodeName(nodePageData.nodeBuiltInName)
            .clickConfigureSideMenuLink()
            .getNodePropertiesTitle()
            .then((actualText) => {
                expect(actualText).to.equal(nodeConfigurePageData.nodePropertiesSectionTitle);
            });
        nodeConfigurePage
            .getNodeConfigurePageUrl()
            .should('include', nodeConfigurePageData.nodeConfigurePageUrl);
    });

    it('AT 11.07.01 | Save Button is visible on Node Configure page', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .getNodeConfigSaveBtn()
            .should('be.visible')
            .and('have.text', 'Save')
    });
})