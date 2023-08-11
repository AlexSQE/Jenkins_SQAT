/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newNodePageData from "../../fixtures/pom_fixtures/newNodePageData.json"

describe('node', () => {

    const homePage = new HomePage();

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

    afterEach(() => {
        homePage
            .clickBuildExecutorStatusLink()
            .hoverAndClickNodeDrpDwn(newNodePageData.nodeName)
            .selectDeleteDrpDwnLink()
            .clickDeleteBtn()
    });
})