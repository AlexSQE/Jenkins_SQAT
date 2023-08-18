/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newNodePageData from "../../fixtures/pom_fixtures/newNodePageData.json"
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe('node', () => {

    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();

    it('AT_11.02.01 | <Build Executor Status> Delete Agent from the homepage on the side panel', () => {
        homePage
        .clickBuildExecutorStatusLink()
        .clickNewNodeBtn()
        .typeNodeNameInputField(newNodePageData.nodeName)
        .selectPermanentAgentRadioBtn()
        .clickCreateBtn()
        .clickSaveBtn()

        homePage
         .hoverAndClickNodeNameDrpDwn(newNodePageData.nodeName)
         .selectDeleteAgentDrpDwnLink()
         .clickDeleteBtn()

        headerAndFooter
         .clickJenkinsHomeLink()
         .getBuildExecutorTable()
         .should('not.include.text', newNodePageData.nodeName)
    })

    it('AT_11.01.02 | Verify that user is able to write Node name on the new node page', () => {

        homePage
         .clickBuildExecutorStatusLink()
         .clickNewNodeBtn()
         .typeNodeNameInputField(newNodePageData.nodeName)
         .getNodeNameField()
         .should('have.value', newNodePageData.nodeName)
    })

    it('AT_11.01.03 | <Build Executor Status> Verify that user is able to select type on the new node page', () => {

        homePage
         .clickBuildExecutorStatusLink()
         .clickNewNodeBtn()
         .typeNodeNameInputField(newNodePageData.nodeName)
         .selectPermanentAgentRadioBtn()
         .getPermanentAgentRadioBtn()
         .should('be.checked')
    })

    it('AT_11.01.01 | <Build Executor Status> Create a new Node', () => {

        homePage
        .clickBuildExecutorStatusLink() 
        .clickNewNodeBtn()
        .typeNodeNameInputField(newNodePageData.nodeName)
        .selectPermanentAgentRadioBtn()
        .clickCreateBtn()
        .clickSaveBtn()
        .verifyNewNodeExistsAndVisible(newNodePageData.nodeName)
    })

    after('delete node', () => {
        homePage
            .clickBuildExecutorStatusLink()
            .hoverAndClickNodeDrpDwn(newNodePageData.nodeName)
            .selectDeleteDrpDwnLink()
            .clickDeleteBtn()
    });   
})