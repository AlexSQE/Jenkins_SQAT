/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import NodeConfigurePage from "../../pageObjects/NodeConfigurePage";
import nodeConfigurePageData from '../../fixtures/pom_fixtures/nodeConfigurePage.json';
import nodePageData from "../../fixtures/pom_fixtures/nodePage.json";
import BuiltInNodePage from "../../pageObjects/BuiltInNodePage";

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

    it('AT 11.07.02 | Save Button is clickable', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .clickNodeConfigureSaveBtn()
            .getBuiltInNodeHeader()
            .should('be.visible')
            .and('have.text', nodePageData.buildInHeader)
    });

    it('AT 11.07.03 | Save Button redirects to Built-In Node Status page', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .clickNodeConfigureSaveBtn()
            .getNodePageUrl()
            .should('include', nodePageData.buildBuiltInUrl)
    });

    it('AT 11.08.01 | Number of executors > Verify that the field accepts valid digit input', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .typeValueNumberOfExecutorsIntoField(nodePageData.validValueNumberOfExecutors)
            .clickLabelsField()
            .getNumberOfExecutorsField()
            .should("have.value", nodePageData.validValueNumberOfExecutors);
    });

    it('AT 11.08.02 | Number of executors > Verify that the field filters digits from mixed input ' +
        'of digits, spaces, letters, special symbols', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .typeValueNumberOfExecutorsIntoField(nodePageData.mixedInputNumberOfExecutors)
            .clickLabelsField()
            .getNumberOfExecutorsField()
            .should("have.value", nodePageData.mixedValueNumberOfExecutors);
    });

    it('AT 11.08.03 | Number of executors > Verify that the default value is set to 0 (zero)' +
        'of digits, spaces, letters, special symbols', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .clickBuiltInNodeGearBtn()
            .typeValueNumberOfExecutorsIntoField(nodePageData.defaultValueNumberOfExecutors)
            .clickLabelsField()
            .getNumberOfExecutorsField()
            .should("have.value", nodePageData.defaultValueNumberOfExecutors);
    });
})